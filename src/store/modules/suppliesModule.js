import * as types from '../../store/types.js'
// import supplyData from '../../data/supplyData';
import axios from 'axios';

const state = {
  //displayHaveSwitch only affects the display,not the supplies object
  displayHaveSwitch: null,
  // supplies: supplyData,
  supplies: [],
  //will be used to check for changes to prompt user to save
  //should be false until supplies are changed, set back when saved
  changed: false

}; //END STATE


/***
 *  a supply item looks like:
 *  {item: 'Paper Towels', have: true}
 *  change to:
 *  *  {item: 'Paper Towels', have: true, inCart: false}
 * ***/


const getters = {
  [types.GET_DISPLAY_HAVE_SWITCH]: state => {
    return state.displayHaveSwitch;
  },

  [types.GET_SUPPLIES]: state => {
    return state.supplies;
  }
}; //END GETTERS

const mutations = {
  [types.MUTATE_ADD_SUPPLY]: (state, supply) => {
    //expects a supply object {item:, have: }
    console.log(supply.item);
    // Capitalize each word of input
    //this makes it easier to read and helps to prevent duplicates
    supply.item = supply.item.replace(/\b\w/g, (l) => {
      return l.toUpperCase()
    });

    //If isSame is false, add the item
    //prevents exact duplicates
    let isSame = true;

    for (let i = 0, n = state.supplies.length; i < n; i++) {
      if (supply.item === state.supplies[i].item) {
        isSame = false;
      }
    }

    if (isSame === true) {
      state.supplies.push(supply);
    }

  },
  //NOT NEEDED - CAN BE DONE IN COMPONENT WITH ONE LINE OF CODE
  // Deprecated in A6

  [types.MUTATE_FLIP_ITEM_BOOL]: (state, payload) => {
    // console.log("payload.have ", payload);
    //expects a supply object and a string {item:, have: },
    // string: which bool to set, either "have" or "inCart"
    try {
      if (payload.bool === 'have') {
        payload.supply.have = !payload.supply.have;
      } else {
        payload.supply.inCart = !payload.supply.inCart;
      }
    }
    catch (e) {
      console.error(e, "MUTATE_FLIP_ITEM_BOOL: ", "You must specify a bool to flip in the supply item");
    }


  },

  // [types.MUTATE_SUPPLY_CONFIRM_CHANGE]: (state) => {
  //   console.log('MUTATE_SUPPLY_CONFIRM_CHANGE');
  //
  // },

  [types.MUTATE_DELETE_ITEM]: (state, index) => {
    //expects the array index of the item to be deleted
    //Deletes a supply object at that index
    state.supplies.splice(index, 1);
  },
  [types.MUTATE_SET_CHANGED]: (state, name) => {
    // name is the name of the calling action,
    // it helps to find which of the 40 gazillion calls is causing a problem
    // console.log('MUTATE_SET_CHANGED: ', name);
    // state.changed starts as false, once changed to true, it is always true until destroyed
    state.changed = true;
  },

  [types.MUTATE_SET_DISPLAY_HAVE_SWITCH]: (state, payloadBool) => {
    //receives a boolean and sets central displayHaveSwitch to that boolean
    state.displayHaveSwitch = payloadBool;
  },

  [types.MUTATE_SWITCH_ALL_HAVE_STATUS]: (state) => {
    //switches all the supply objects have bools to be the same
    state.displayHaveSwitch = !state.displayHaveSwitch;

    // for(let i = 0; i < state.supplies.length; i++){
    //     state.supplies[i].have = state.displayHaveSwitch;
    // }

    state.supplies.forEach((arrayMember) => {
      arrayMember.have = state.displayHaveSwitch;
    })

  },

  [types.MUTATE_TOGGLE_HAVE_STATUS]: (state) => {
    state.displayHaveSwitch = !state.displayHaveSwitch;
  },

  // DATABASE MUTATIONS

  [types.MUTATE_FETCH_SUPPLY]: (state) => {
    axios.get('/supplies.json')
      .then(response => {
        return response.data;
      })
      .then(data => {
        //axios converts to array automagically! :-)
        //must use slice or it makes reference copies
        state.supplies = data.slice(0, data.length);
      })
      .catch(error => {
        let record = [];
        for (let key in error) {
          record.push(error[key]);
        }

        if (record[0].maxContentLength === -1) {
          console.error("suppliesModule.MUTATE_FETCH_SUPPLY:", "No response from database.");
        }
        // console.error('MUTATE_FETCH_SUPPLY', record)
      });
  },

  [types.MUTATE_SAVE_SUPPLY]: (state) => {
    axios.put('/supplies.json', state.supplies)
      .then(response => {
        // console.log('MUTATE_FB_SAVE_SUPPLY response:', response)
      })
      .catch(error => {
        console.error('MUTATE_FB_SAVE_SUPPLY error:', error)
      });
  },


};// END MUTATIONS


const actions = {
  [types.SUPPLY_ADD_SUPPLY]: ({commit}, supply) => {
    //expects a supply object {item:, have: }
    commit(types.MUTATE_ADD_SUPPLY, supply);
    commit(types.MUTATE_SET_CHANGED, 'SUPPLY_ADD_SUPPLY');
  },



  [types.SUPPLY_CONFIRM_CHANGE]: ({state, commit}) => {

    if (state.changed === true) {
      if (confirm("Save changes?")) {
        // console.log("s******ave");
        commit(types.MUTATE_SAVE_SUPPLY);
        state.changed = false;
      }
    }
  },

  [types.SUPPLY_DELETE_ITEM]: ({commit}, index) => {
    //expects the array index of the item to be deleted
    commit(types.MUTATE_DELETE_ITEM, index);
    commit(types.MUTATE_SET_CHANGED, 'SUPPLY_DELETE_ITEM');
  },

  [types.SUPPLY_FETCH_SUPPLY]: ({commit}) => {
    // let supplies = rootState.suppliesModule.supplies;
    // console.log(rootState.suppliesModule.supplies);
    commit(types.MUTATE_FETCH_SUPPLY);
    // commit(types.MUTATE_FB_SAVE_SUPPLY, supplies);
  },

  [types.SUPPLY_FLIP_ITEM_BOOL]: ({commit}, payload) => {
    //expects a supply object {item:, have: }
    commit(types.MUTATE_FLIP_ITEM_BOOL, payload);
    commit(types.MUTATE_SET_CHANGED, 'SUPPLY_FLIP_ITEM_BOOL');
  },

  [types.SUPPLY_SAVE_SUPPLY]: ({commit}) => {
    commit(types.MUTATE_SAVE_SUPPLY);
  },


  // [types.SUPPLY_INIT_DATA_COPY]: ({commit}) => {
  //   commit(types.MUTATE_SUPPLY_INIT_COPY);
  // },
  [types.SUPPLY_SET_DISPLAY_HAVE_SWITCH]: ({commit}, payloadBool) => {
    //expects a boolean
    commit(types.MUTATE_SET_DISPLAY_HAVE_SWITCH, payloadBool);
    // commit(types.MUTATE_SET_CHANGED, 'SUPPLY_SET_DISPLAY_HAVE_SWITCH');
  },

  [types.SUPPLY_SWITCH_ALL_HAVE_STATUS]: ({commit}) => {
    //changes all the bools in the supply array to same
    commit(types.MUTATE_SWITCH_ALL_HAVE_STATUS);
    commit(types.MUTATE_SET_CHANGED, 'SUPPLY_SWITCH_ALL_HAVE_STATUS');
  },

  [types.SUPPLY_TOGGLE_HAVE_STATUS]: ({commit}) => {
    //toggles the bool in a single supply object {item:, have: }
    commit(types.MUTATE_TOGGLE_HAVE_STATUS);
    commit(types.MUTATE_SET_CHANGED, 'SUPPLY_TOGGLE_HAVE_SWITCH');
  },


}; // END ACTIONS


export default {
  state,
  mutations,
  actions,
  getters
}

//syntax
// export const actionName = () =>{};

//lecture 265 && 268

import * as types from '../store/types.js'

export const initData = ({commit, rootState}) =>{
  let val = rootState.choreModule;

  console.log("initData", val);
  commit(types.MUTATE_SET_CHORES, val.chores);
  commit(types.MUTATE_SORT_NAMES, val.names);
  commit(types.MUTATE_SET_ROTATION);
};

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Home from './Home.vue';
import ChoreWheel from './components/chores/ChoreGrid.vue';
// import CostSplit from './components//CostSplit.vue';
// import EventPlan from './components/EventPlanning.vue';
// import Messenger from './components/Messenger.vue';
// import GuestBoard from './components/GuestBoard.vue';
// import Profiles from './components/Profiles.vue';
import ShoppingList from './components/supplies/ShoppingList.vue';
import SuppliesInventory from './components/supplies/SuppliesInventory.vue';

//**Administration **/
import AdminSupplies from './components/admin/SuppliesAdmin.vue';


//** children of Profiles **/
// import HomeProfile from './components/shared/HomeProfile.vue';
// import PotentialRoommates from './components/shared/PotentialRoommates.vue';
// import RoommatesProfiles from './components/shared/RoommatesProfiles.vue';
// import ProfilesMenu  from './components/shared/ProfilesMenu.vue';


export const routes = [
  {path: '', component: Home},
  {path: '/', component: Home},
  //Administration
  {path: '/adminSupplies', component: AdminSupplies, name: 'adminSupplies'},
  //Features
  {path: '/choreWheel', component: ChoreWheel, name: 'choreWheel'},
  // {path: '/costSplit', component: CostSplit, name: 'costSplit'},
  // {path: '/eventPlanning', component: EventPlan, name: 'eventPlan'},
  // {path: '/messenger', component: Messenger, name: 'messenger'},
  // {path: '/guestBoard', component: GuestBoard , name: 'guestBoard'},
  {path: '/shoppingList', component: ShoppingList, name: 'shoppingList'},
  {path: '/suppliesInventory', component: SuppliesInventory, name: 'suppliesInventory'},

  // {path: '/profiles', components: {default: Profiles
  //                                     }, children: [
  //                                         // {path: '', component: ProfilesMenu, name: 'profilesMenu.'},
  //                                         {path: '', component: ProfilesMenu, name: 'profilesMenu.'},
  //                                         {path: '/homeProfile', component: HomeProfile, name: 'homeProfile'},
  //                                         {path: '/potentialRoommates', component: PotentialRoommates, name: 'potentialRoommates'},
  //                                         {path: '/roommateProfiles', component: RoommatesProfiles, name: 'roommateProfiles'}
  //                                                                     ]}


];

export default new VueRouter({mode: 'history', routes});

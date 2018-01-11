<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link to="/"
                       class="navbar-brand">Share House A6
          </router-link>

        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <router-link to="/"
                         tag="li"
                         active-class="" exact><a>Home </a></router-link>
          </ul>

          </form>
          <ul class="nav navbar-nav navbar-right list-group">

            <li
              @mouseenter="isAdminOpen =!isAdminOpen"
              @mouseleave="isAdminOpen =!isAdminOpen"
              class="dropdown-toggle"
              :class="{open: isAdminOpen}">
              <a href="#"
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 role="button"
                 aria-haspopup="true"
                 aria-expanded="false">Admin <span class="caret"></span></a>
              <ul class="dropdown-menu">

                <router-link to="adminSupplies"
                             tag="li"
                             active-class=""
                             class="list-group-item" exact><a>adminLists</a></router-link>
                <li class="list-group-item mb"
                    @click="fetchSupplies"><a>Load</a>
                </li>
              </ul>
            </li>

            <li
              @mouseenter="isDropDownOpen =!isDropDownOpen"
              @mouseleave="isDropDownOpen =!isDropDownOpen"
              class="dropdown-toggle"
              :class="{open: isDropDownOpen}">
              <a href="#"
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 role="button"
                 aria-haspopup="true"
                 aria-expanded="false">Components <span class="caret"></span></a>
              <ul class="dropdown-menu">


                <router-link to="choreWheel"
                             tag="li"
                             active-class=""
                             class="list-group-item" exact><a>choreWheel </a></router-link>

                <!--<router-link to="eventPlanning"-->
                <!--tag="li"-->
                <!--active-class=""-->
                <!--class="list-group-item" exact><a>Event Planning</a></router-link>-->


                <!--<router-link to="costSplit"-->
                <!--tag="li"-->
                <!--active-class=""-->
                <!--class="list-group-item" exact><a>costSplit </a></router-link>-->

                <!--<router-link to="messenger"-->
                <!--tag="li"-->
                <!--active-class=""-->
                <!--class="list-group-item" exact><a>messenger </a></router-link>-->

                <!--<router-link to="guestBoard"-->
                <!--tag="li"-->
                <!--active-class=""-->
                <!--class="list-group-item" exact><a>guestBoard</a></router-link>-->

                <!--<router-link to="profiles"-->
                <!--tag="li"-->
                <!--active-class=""-->
                <!--class="list-group-item" exact><a>profiles</a></router-link>-->


                <router-link to="shoppingList"
                             tag="li"
                             active-class=""
                             class="list-group-item" exact><a>shoppingList </a></router-link>


                <router-link to="suppliesInventory"
                             tag="li"
                             active-class=""
                             class="list-group-item" exact><a>suppliesInventory</a></router-link>


              </ul>
            </li> <!-- END DROP DOWN -->

          </ul>
        </div><!-- /.navbar-collapse -->

      </div><!-- /.container-fluid -->
    </nav>


    <ul class="nav nav-pills">
      <!-- <li role="presentation" ><router-link to="/">Home</router-link></li> -->
      <!-- <li role="presentation"><router-link to="/weHave">weHave</router-link></li> -->


    </ul>

  </div>
</template>

<script>
  import * as types from './store/types.js';
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        isAdminOpen: false,
        isDropDownOpen: false
      };
    },

    methods: {
      inactive() {
        console.log('inactive button');
      },
      ...mapActions({
        saveSupplies: types.SUPPLY_SAVE_SUPPLY,
        fetchSupplies: types.SUPPLY_FETCH_SUPPLY
      })
    }
  }
</script>
<style scoped>

  .mb{
    cursor: pointer;
  }

</style>

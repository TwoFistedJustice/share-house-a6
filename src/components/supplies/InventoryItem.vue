<template>
    <div class="col-sm-6 col-md-6">
        <!--<div class="panel"-->
            <!-- Keep this in case we need it. But it won't work with the save change prompt introduced in A6 -->
             <!--v-bind:class="{'panel-danger': !supply.have, 'panel-success': supply.have}">-->
            <!--<div class="flex panel-heading"-->
                 <!--@click="supply.have = !supply.have">-->
                <!--<h2 v-if="supply.have">{{supply.item}} : We have this.</h2>-->
                <!--<h2 v-if="!supply.have">{{supply.item}} : We need this.</h2>-->
            <!--</div>-->

        <!--</div>-->

      <!-- <div class="panel"
           v-bind:class="{'panel-danger': !supply.have, 'panel-success': supply.have}">
        <div class="flex panel-heading"
             @click="changeItemHaveStatus(supply)">
          <h2 v-if="supply.have">{{supply.item}} : We have this.</h2>
          <h2 v-if="!supply.have">{{supply.item}} : We need this.</h2>
        </div>

      </div> -->
      <div class="panel"
           v-bind:class="{'panel-danger': !supply.have, 'panel-success': supply.have}">
        <div class="flex panel-heading"
             @click="changeItemBoolStatus( {supply: supply, bool: 'have'} )">

          <h2 v-if="supply.have">{{supply.item}} : We have this.</h2>
          <h2 v-if="!supply.have">{{supply.item}} : We need this.</h2>
        </div>

      </div>
    </div>
</template>

<script>

    /***
     *  a supply item looks like:
     *  {item: 'Paper Towels', have: true, inCart: false}
     * ***/
    import {mapActions} from 'vuex';
//     import * as types from '../../store/types.js';
    import {SUPPLY_FLIP_ITEM_BOOL} from '../../store/types.js';

    export default {
        props: ['supply'],

        methods:{
            ...mapActions({
              changeItemBoolStatus: SUPPLY_FLIP_ITEM_BOOL
        }),
      }
    }

</script>

<style scoped>

    .flex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
    }



</style>

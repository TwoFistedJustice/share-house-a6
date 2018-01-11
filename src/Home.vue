<template>

<div>
    <div class="row">
        <h1>Home page</h1>
       <h3>Features and Breakdown of this Alpha Version 6</h3>
        <p>The goal is to flesh out the basic features of the core components</p>
            <ul>
                <li>Load initial data from file</li>
                <li>Supplies and Shopping List</li>
                <li>Chore Wheel</li>
                <li>No Admin for Chore wheel in A6</li>

                <li>Add
                    <del>Vue Resource or</del> Axios</li>
                <li>Ability to save and load complex data from Firebase to multiple components</li>
            </ul>



        <p></p>
        <h3>To DO in Alpha 6</h3>
        <ul>

            <li>Add simple animation/transitions - see Vue 18 Project App.vue</li>


        </ul>
        <h3>Changelog</h3>
        <h4>Alpha 6</h4>
        <ul>
            <li>Automatically saves supplies to database when you navigate away</li>
            <li>Refactored directory structure</li>
            <li>Changed lists to component arrays</li>
            <li>Added Event Planning component</li>
            <li>Added a bootstrap dropdown menu to Header.vue for router-links</li>
            <li>Initializing data from from file instead of data() propery - see src/data directory</li>
            <li>Separated List Administration from shared components</li>
            <li>Gave List Administration its own drop down menu </li>
        </ul>
        <h4>Alpha 5</h4>
        <ul>
            <li>Added naming/types to Vuex</li>
            <li>Incorporates vuex modules to distribute actions, mutations, getters across multiple files</li>
            <li>Refactored all supply properties and methods to shorter syntax</li>
            <li>Added Vuex namespacing - manually configured - see types.js</li>
            <li>Disabled most components</li>
            <li>Vuex state passes data between ShoppingList, SuppliesInventory, & AdminstrateLists</li>
        </ul>
        <h4>Alpha 4</h4>
        <ul>
            <li>Added Vuex</li>
            <li>Deprecated NeedHave.vue</li>
        </ul>
        <h4>Alpha 3</h4>
        <ul>
            <li>Added Vue Router</li>
            <li>Set up basic routing</li>
        </ul>

        <h4>Alpha 1 & 2</h4>
        <ul>
            <li>Built basic structure</li>
            <li>Tested Event Bus for state</li>
            <li>Tested Firebase for DB</li>
        </ul>
        <p></p>

        <h3>What this code is built on</h3>
        <p>Vue.js, Vue-Router, Vuex, Axios</p>




</div></div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>

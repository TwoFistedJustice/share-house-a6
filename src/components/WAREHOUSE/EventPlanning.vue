<template>

<div>
    <div class="row">
        <h1>EventPlanning.vue</h1>
       <h3>Features and Breakdown of this component</h3>
            <ul>
                <li v-for="feature in componentFeatures"><p><b>{{feature}}</b></p></li>
            </ul>

        
        <p><b>Anticipated:Techniques</b> </p>
        <ul v-for="tech in techExpected">
            <li><p>{{tech}}</p></li>
        </ul>
        
    </div>
      <div class="row">
         
      </div>
</div>
</template>




<script>


export default {
    props:[],
    data: function(){
        return {
            changesToMake:[],
            componentFeatures: [
                'Standard shopping list - perishables',
                'things to to check every time',
                'task list with responsible assignment',
                'shopping list can re-use ShoppingList component'
            ],
            techExpected: []
            
        };
        
    }


}
</script>

<style scoped>

</style>

<template>

<div>
    <div class="row">
        <h1>Profiles.vue</h1>
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

      <div class="dropdown">
    <button class="dropbtn">Profile Menu</button>
     
     
          <div class="dropdown-content">
              <router-link to="homeProfile" 
                           tag="li" 
                           active-class="" exact><a>homeProfile</a></router-link>
              
              <router-link to="potentialRoommates" 
                           tag="li" 
                           active-class="" exact><a>potentialRoommates </a></router-link>
        
              <router-link to="roommateProfiles" 
                           tag="li" 
                           active-class="" exact><a>roommateProfiles </a></router-link>
    
          </div>     
     
     
      </div>
         
      
      
      
      </div>
      <div class="row">
          
          <router-view></router-view>
      </div>
</div>
</template>




<script>
//drop down menu
//https://www.w3schools.com/howto/howto_css_dropdown.asp

export default {
    props:[],
    data: function(){
        return {
            changesToMake:[],
            componentFeatures: [],
            techExpected: [
                'slots',
                'route children'
            ]
            
        };
        
    }


}
</script>

<style scoped>
/* Dropdown Button */
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}

</style>

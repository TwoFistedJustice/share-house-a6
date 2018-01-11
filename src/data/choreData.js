
// export {chores, names, caveat};

export chores;


//goal return array [3,4,5,1,2]

/**
* THIS IS THE BASIC FORM OF THE FUNCTION TO ASSIGN A CHORE
 * WHERE X IS THE INDEX+1 OF THE PERSON ASSIGNED TO TRASH
*
**/
var data = [1,2,3,4,5];
var newArray = [];

function thing(){
    let n = data.length;
    let x = 2; //index found in some array
        //EYE IS LESS THAN Enn
    for( let i = x; i < n; i++){
        newArray.push(data[i]);
    }
        //EYE IS LESS THAN Ecks
    for( let i = 0; i < x; i++){
        newArray.push(data[i]);
    }
}


//this will be generated dynamically by each user's instance
//OR, it can be generated once per period then be mutable by each user's instance
// that way it is guaranteed to display the same for everyone
//this variable is just a model to follow
// let assignments =[
//     {
//     choreId: 2, //pulled from chores array - acts as key for this array
//     userName: 'Carl', //pulled from users component
//     completed: false,
//     confirmed: false,
//     confirmedBy: 'Russ' //pulled from users component
//     }
// ];

let chores = [
{key: 'A', task: 'Trash', description: 'Empty kitchen trash, recycling, and compost. Replace any bags. Take bins to curb before 7PM.'},
{key: 'B', task: 'Dish Rack',  description: 'Empty the dish rack, clean the drainage trays, scrub the sink with cleanser.'},
{key: 'C', task: 'Countertops',  description: 'Wipe down the counter tops and tidy up the kitchen. Put things away.'},
{key: 'D', task: 'Stove',  description: 'Wipe down the stove top. Clean the microwave inside and out.'},
{key: 'E', task: 'Sweep',  description: 'Sweep the kitchen, hallway, living room, and dining room. Bonus points for sweeping the pool room.'}

];


// id: will be used in other components as a key
//when trash: is true, that person is the chore key
//UPDATE -  the chores object in the module has key. whoever is set where key = 'A' is the chore key
let names = [
    {id: 1,name: 'Russ', color:'Yellow', choreKey: true },
    {id: 2,name: 'Ron', color:'Green', choreKey: false },
    {id: 3,name: 'Carl', color:'White', choreKey: false },
    {id: 4,name: 'Kayla', color:'Blue', choreKey: false },
    {id: 5,name: 'Deadbeat', color:'Red', choreKey: false }
];

/**
 *
 * if trash is true
 * add that member data to a new array
 * add each following member data to the array
 * then add the left over member data (those that preceded)
 *
 *
 * **/



let caveat = 'Weeks are numbered 1- 5 on the paper calendar. Five roommates, five weeks.' +
    ' Sign up for trash on one Monday in a five week period. That is your house job for the week' +
    ' etc etc';




/**
 * Will need some kind of key so objects can work together...
 * example: each chore should have a key
 * !! Use the one we use on the ACTUAL chore wheel!
 *
 * **/

/**
* Need a way for users to mark chore complete
 * A7
* and one other to verify that it's done
* the verifier is publicly known
 * any user can then mark it 'not done' if it's not good enough
 * a 2/3 majority vote can suspend this feature for a user for a period
* * * */

/**
* Maybe 'completed' should be part of a user based object.
*
* like the user home page loads relevant data
*   this weeks chore
*   who you owe and how much
* * */

/**
 *The admin page lets anyone see:
 *  who was assigned which task
 *  was it marked complete?
 *  who verified that it was done
 *
 *
 */


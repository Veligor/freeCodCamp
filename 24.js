//Add Key-Value Pairs to JavaScript Objects

const foods = {
   apples: 25,
   oranges: 32,
   plums: 28
 };
 
 // Only change code below this line
 foods["bananas"] = 13;
 foods["grapes"] = 35;
 foods["strawberries"] = 27
 // Only change code above this line
 
 console.log(foods);

 //Modify an Object Nested Within an Object.

 let userActivity = {
   id: 23894201352,
   date: 'January 1, 2017',
   data: {
     totalUsers: 51,
     online: 42
   }
 };
 
 // Only change code below this line
 userActivity.data.online = 45;
 // Only change code above this line
 
 console.log(userActivity);
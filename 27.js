//Iterate Through the Keys of an Object with a for...in Statement
const users = {
   Alan: {
     online: false
   },
   Jeff: {
     online: true
   },
   Sarah: {
     online: false
   }
 }

function countOnline(allUsers) {
   // Only change code below this line
   let online = 0;
   for (const red in allUsers) {
     if (allUsers[red].online === true) {
       online++;
     }
   }
   return online
   // Only change code above this line
 }
 console.log(countOnline(users));

 //Generate an Array of All Object Keys with Object.keys()

 
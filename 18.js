//Catch Missing Open and Closing Parenthesis After a Function Call

function getNine() {
   let x = 6;
   let y = 3;
   return x + y;
 }
 
 let result = getNine();
 console.log(result);

 //Catch Arguments Passed in the Wrong Order When Calling a Functio

 function raiseToPower(b, e) {
   return Math.pow(b, e);
 }
 
 let base = 2;
 let exp = 3;
 let power = raiseToPower(base, exp);
 console.log(power);
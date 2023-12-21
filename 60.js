//Comparisons with the Logical And Operator

function testLogicalAnd(val) {
   // Only change code below this line
 
   if (val <= 50 && val >= 25) {
       return "Yes";
   }
   // Only change code above this line
   return "No";
 }
 
// Comparisons with the Logical Or Operator

function testLogicalOr(val) {
   // Only change code below this line
   if (val < 10 || val > 20) {
     return "Outside";
   }
   // Only change code above this line
   return "Inside";
 }

 //Introducing Else Statements

 function testElse(val) {
   let result = "";
   // Only change code below this line
 
   if (val > 5) {
     result = "Bigger than 5";
   } else {
     result = "5 or Smaller";
   }
   // Only change code above this line
   return result;
 }

 //Introducing Else If Statements

 function testElseIf(val) {
   if (val > 10) {
     return "Greater than 10";
   } else if (val < 5) {
     return "Smaller than 5";
   } else {
   return "Between 5 and 10";
 }
 }
 console.log(testElseIf(8))

 
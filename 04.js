function testStrictNotEqual(val) {
   if (val !== 17) { // Change this line
     return "Not Equal";
   }
   return "Equal";
 }
 
 testStrictNotEqual(10);

 function testGreaterThan(val) {
   if (val > 100) {  // Change this line
     return "Over 100";
   }
 
   if (val > 10) {  // Change this line
     return "Over 10";
   }
 
   return "10 or Under";
 }
 
 testGreaterThan(10);

 function testGreaterOrEqual(val) {
   if (val >= 20) {  // Change this line
     return "20 or Over";
   }
 
   if (val >= 10) {  // Change this line
     return "10 or Over";
   }
 
   return "Less than 10";
 }
 
 testGreaterOrEqual(10);

 function testLessThan(val) {
   if (val < 25) {  // Change this line
     return "Under 25";
   }
 
   if (val < 55) {  // Change this line
     return "Under 55";
   }
 
   return "55 or Over";
 }
 
 testLessThan(10);

 function testLessOrEqual(val) {
   if (val <= 12) {  // Change this line
     return "Smaller Than or Equal to 12";
   }
 
   if (val <= 24) {  // Change this line
     return "Smaller Than or Equal to 24";
   }
 
   return "More Than 24";
 }
 
 testLessOrEqual(10);

 function testLogicalAnd(val) {
   // Only change code below this line
 
   if (val <= 50 && val >= 25) {
     return "Yes"
   } 
 
   // Only change code above this line
   return "No";
 }
 
 testLogicalAnd(10);

 function testLogicalOr(val) {
   // Only change code below this line
 
   if (val < 10 || val > 20) {
     return "Outside";
   }
 
   
 
   // Only change code above this line
   return "Inside";
 }
 
 testLogicalOr(15);
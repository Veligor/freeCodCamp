function welcomeToBooleans() {
  return true; // Change this line
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "was That True true No,that was false";
}

function testEqual(val) {
   if (val == 12) { // Change this line
     return "Equal";
   }
   return "Not Equal";
 }
 
 testEqual(10);

 function testStrict(val) {
   if (val === 7) { // Change this line
     return "Equal";
   }
   return "Not Equal";
 }
 
 testStrict(10);

 function compareEquality(a, b) {
   if (a === b) { // Change this line
     return "Equal";
   }
   return "Not Equal";
 }
 
 compareEquality(10, "10");

 function testNotEqual(val) {
   if (val != 99) { // Change this line
     return "Not Equal";
   }
   return "Equal";
 }
 
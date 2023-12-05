// Boo who

function booWho(bool) {
   if (bool <= 0 | bool === -0 | bool === null | bool === false, isNaN(bool) | bool=== undefined | bool === "" | typeof bool === "number"){
     return false;
   }
   else{
     return true;
   }
 }
 
 booWho(null);

//Title Case a Sentence

function titleCase(str) {
   str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  
  
  titleCase("I'm a little tea pot");
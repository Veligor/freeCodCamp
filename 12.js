//Add a script to the HTML document of type module and give it the source file of index.js

// <html>
//   <body>
//     <!-- Only change code below this line -->
// <script type="module" src="index.js"></script>
//     <!-- Only change code above this line -->
//   </body>
// </html>

//Use export to Share a Code Block

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase();
}

export {uppercaseString, lowercaseString}

//Reuse JavaScript Code Using import

uppercaseString("hello");
lowercaseString("WORLD!");

import {uppercaseString, lowercaseString} from "./string_functions.js"

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

import * as stringFunctions from "./string_functions.js";

//Create an Export Fallback with export default

export default function subtract(x, y) {
  return x - y;
}



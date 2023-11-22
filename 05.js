function testElse(val) {
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
  return "Change Me";
  // Only change code above this line
}

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
case 'a':
  answer = "apple";
  break;
case 'b':
 answer = "bird";
 break;
case 'c':
 answer = 'cat';
 break
default:
 answer = 'stuff';  
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
     answer = "Low"
     break;
    case 4:
    case 5:
    case 6:
     answer = "Mid";
     break;
    case 7:
    case 8:
    case 9:
     answer = "High";
     break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
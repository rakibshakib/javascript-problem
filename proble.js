const getVal = (str) => {
  const arrString = str.split("");
  let sum = 0;
  for (let key of arrString) {
    if (key == "I") {
      sum += 1;
    } else if (key == "V") {
      sum += 5;
    } else if (key == "X") {
      sum += 10;
    } else if (key == "L") {
      sum += 50;
    } else if (key == "C") {
      sum += 100;
    } else if (key == "D") {
      sum += 500;
    } else if (key == "M") {
      sum += 1000;
    }
    // switch (arrString[i]) {
    //   case "I":
    //     sum += 1;
    //     // break;
    //   case "V":
    //     sum += 5;
    //     // break;
    //   case "X":
    //     sum += 10;
    //     // break;
    //   case "L":
    //     sum += 50;
    //     // break;
    //   case "C":
    //     sum += 100;
    //     // break;
    //   case "D":
    //     sum += 500;
    //     // break;
    //   case "M":
    //     sum += 1000;
    //     // break;
    // }
  }

  return sum;
};
// console.log("val: ", getVal("MDCLXVI"));
// console.log("val: ", getVal("MMVIII"));
console.log("val: ", getVal("IV"));
console.log("val: ", getVal("VII"));
// console.log("val: ", getVal("I"));
// console.log("val: ", getVal("XXI"));

//
/* 
  // if (key == "I") {
    //   sum += 1;
    // } else if (key == "V") {
    //   sum += 5;
    // } else if (key == "X") {
    //   sum += 10;
    // } else if (key == "L") {
    //   sum += 50;
    // } else if (key == "C") {
    //   sum += 100;
    // } else if (key == "D") {
    //   sum += 500;
    // } else if (key == "M") {
    //   sum += 1000;
    // }
*/

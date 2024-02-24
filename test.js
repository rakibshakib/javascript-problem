// const numberArr = [10, 12, 14, 17, 18, 23, 29, 42, 53, 57, 87, 93, 102, 109, 118, 129, 137, 150];
// const numberArr = [10, 12, 14, 17, 18];
// const reducerFunc = (a, b) => a + b;
// let a = 5;
// const result = numberArr.reduce((a, b, i, arr) => {
//   console.log({ a, b , i, arr});
//   return a + b;
// }, 5);
// console.log(result);

function roman_to_Int(str1) {
  if (str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;
  console.log("initial num", num);
  for (var i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    console.log("value of i is", i, "curr-->", curr);
    console.log("value of i is", i, "pre-->", pre);
    if (curr <= pre) {
      console.log("check is");
      num += curr;
    } else {
      console.log("check else");
      num = num - pre * 2 + curr;
    }
  }
  console.log("num", num);

  // return num;
}

function char_to_int(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}
console.log(roman_to_Int("IV"));
// console.log(roman_to_Int("CI"));
// console.log(roman_to_Int("MDCLXVI"));

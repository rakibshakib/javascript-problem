function log(params) {
  console.log(params);
}
/* 
    Do You Know? Array.slice method accepts negative values, which begins counting from the end. 😃 
    🤞 Get the last element of the array by passing the negative value in the slice() method! 
 */

const number = [10, 12, 14, 34, 65, 76, 83, 98, 72, 50];

log(number.slice(-1)); // 👉 [50]
log(number.slice(-2)); // 👉 [ 72, 50 ]

log(number[number.length - 1]); // 👉 50

// 😎 Author: Rakibul Islam

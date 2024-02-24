function insertionSort(arr = []) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]; // 6
    let j = i - 1; // 0

    while (j >= 0 && arr[j] > numberToInsert) {
      // true && -5 > 6 => false
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}
let arr = [-5, 6, 2, 9, 10];
insertionSort(arr);
console.log(arr);

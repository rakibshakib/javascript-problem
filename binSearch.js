const binSearch = (arr, target) => {
    if (!arr.length > 0) return -1;
    let startIndex = 0;
    let endIndex = arr.length - 1;
  
    while (startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if (arr[middleIndex] === target) return middleIndex;
      else if (arr[middleIndex] > target) {
        endIndex = middleIndex - 1;
      } else if (arr[middleIndex] < target) {
        startIndex = middleIndex + 1;
      }
    }
    return -1;
  };
  console.log(binSearch([-2, 3, 4, 5, 6], 7));
  
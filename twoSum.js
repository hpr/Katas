function twoSum(arr, val) {
  let result = []
  arr.forEach((x, i) => {
    arr.forEach((y, j) => {
      if (i !== j && x+y === val) {
        result = [j, i];
      }
    });
  });
  return result;
}

module.exports = twoSum;

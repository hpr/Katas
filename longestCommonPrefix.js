function longestCommonPrefix(arr) {
  let index = 0;
  try {
    while (true) {
      let iValue = arr[0][index]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][index] !== iValue) {
          return arr[0].slice(0,index);
        }
      }
      index++;
    }
  } catch (err) {
    return arr[0].slice(0,index);
  };
}

module.exports = longestCommonPrefix;

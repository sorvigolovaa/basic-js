function deleteDigit(n) {
  const str = n.toString();
  let max = 0;
  
  for (let i = 0; i < str.length; i++) {
    const newStr = str.slice(0, i) + str.slice(i + 1);
    const num = parseInt(newStr);
    if (num > max) {
      max = num;
    }
  }
  
  return max;
}


module.exports = {
  deleteDigit
};

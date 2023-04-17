function getDNSStats(n) {
  let str = n.toString();
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str.slice(0, i) + str.slice(i+1));
    if (num > max) {
      max = num;
    }
  }
  return max;
}


module.exports = {
  getDNSStats
};

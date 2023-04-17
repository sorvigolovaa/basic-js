function sortByHeight(arr) {
  const heights = arr.filter(h => h !== -1).sort((a, b) => a - b);
  let i = 0;
  return arr.map(h => h === -1 ? h : heights[i++]);
}


module.exports = {
  sortByHeight
};

function getCommonCharacterCount(s1, s2) {
  const map1 = createCharMap(s1);
  const map2 = createCharMap(s2);
  let count = 0;
  
  for (const [char, frequency] of Object.entries(map1)) {
    if (char in map2) {
      count += Math.min(frequency, map2[char]);
    }
  }
  
  return count;
}

function createCharMap(str) {
  const map = {};
  
  for (const char of str) {
    if (char in map) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  
  return map;
}

module.exports = {
  getCommonCharacterCount
};

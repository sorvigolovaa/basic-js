function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let count = 0;
      for (let row = i - 1; row <= i + 1; row++) {
        for (let col = j - 1; col <= j + 1; col++) {
          if (row >= 0 && row < matrix.length &&
              col >= 0 && col < matrix[0].length &&
              (row !== i || col !== j) &&
              matrix[row][col]) {
            count++;
          }
        }
      }
      result[i][j] = count;
    }
  }
  return result;
}


module.exports = {
  minesweeper
};

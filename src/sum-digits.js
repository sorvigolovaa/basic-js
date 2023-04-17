function getSumOfDigits(n) {
  while (n >= 10) {
    const digits = n.toString().split('').map(Number);
    n = digits.reduce((sum, digit) => sum + digit, 0);
  }
  return n;
}


module.exports = {
  getSumOfDigits
};

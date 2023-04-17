function isMAC48Address(inputString) {
  var regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return regex.test(inputString);
}

module.exports = {
  isMAC48Address
};

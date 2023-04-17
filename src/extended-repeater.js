function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  if (typeof str !== 'string') {
    str = String(str);
  }

  if (typeof addition !== 'string') {
    addition = String(addition);
  }

  let additionStr = new Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  return new Array(repeatTimes).fill(str + additionStr).join(separator);
}


module.exports = {
  repeater
};

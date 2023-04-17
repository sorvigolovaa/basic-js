const { isDate, getMonth } = require('date-fns');

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (isDate(date) && isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  if (!isDate(date)) {
    throw new Error('Invalid date!');
  }

  const month = getMonth(date);

  if (month === 11 || month < 2) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else {
    return 'fall';
  }
}

module.exports = {
  getSeason
};

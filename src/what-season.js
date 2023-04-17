const { isDate, getMonth, parseISO } = require('date-fns');

function getSeason(date) {
  if (!date || !isDate(date)) {
    throw new Error('Invalid date!');
  }

  const parsedDate = parseISO(date.toISOString().slice(0, 10));

  if (getMonth(parsedDate) === 11 || getMonth(parsedDate) < 2) {
    return 'winter';
  } else if (getMonth(parsedDate) < 5) {
    return 'spring';
  } else if (getMonth(parsedDate) < 8) {
    return 'summer';
  } else if (getMonth(parsedDate) < 11) {
    return 'fall';
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};


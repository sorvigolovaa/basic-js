function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (typeof date !== 'string' && !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  const dateString = date instanceof Date ? date.toISOString().slice(0, 10) : date;

  if (!dateRegex.test(dateString)) {
    throw new Error('Invalid date!');
  }

  const month = new Date(dateString).getMonth();

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

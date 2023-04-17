function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  let dateObj;

  if (typeof date === 'string') {
    dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date!');
    }
  } else if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  } else {
    dateObj = date;
  }

  const month = dateObj.getMonth();

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

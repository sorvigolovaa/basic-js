function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (isNaN(month) || isNaN(day)) {
    throw new Error('Invalid date!');
  }

  if (month === 12 || month === 1 || month === 2) {
    return 'winter';
  } else if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else if (month >= 9 && month <= 11) {
    return 'fall';
  }
}




module.exports = {
  getSeason
};

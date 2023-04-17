function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error('Invalid date!');
  }

  if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else if (month >= 9 && month <= 11) {
    return 'fall';
  } else {
    return 'winter';
  }
}





module.exports = {
  getSeason
};

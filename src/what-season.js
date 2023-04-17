function getSeason(date) {
  if (!date || Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  if (month < 2 || month === 11) {
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





module.exports = {
  getSeason
};

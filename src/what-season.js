function getSeason(date) {
  if (!date || Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date)) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  switch (month) {
    case 0:
    case 1:
    case 11:
      return 'зима';
    case 2:
    case 3:
    case 4:
      return 'весна';
    case 5:
    case 6:
    case 7:
      return 'лето';
    case 8:
    case 9:
    case 10:
      return 'осень';
    default:
      throw new Error('Invalid date!');
  }
}




module.exports = {
  getSeason
};

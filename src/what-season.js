const dayjs = require('dayjs');

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  let dateObj = dayjs(date);
  
  if (!dateObj.isValid()) {
    throw new Error('Invalid date!');
  }
  
  if (dateObj.$H > 0 || dateObj.$m > 0 || dateObj.$s > 0 || dateObj.$ms > 0) {
    throw new Error('Invalid input: Date object should contain only month and year');
  }

  const month = dateObj.$M;
  
  switch (month) {
    case 11:
    case 0:
    case 1:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'fall';
    default:
      throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};

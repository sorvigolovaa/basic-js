const SEASONS = {
  winter: [11, 0, 1],
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  fall: [8, 9, 10],
};

function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  for (const [season, months] of Object.entries(SEASONS)) {
    if (months.includes(month)) {
      return season;
    }
  }

  throw new Error('Invalid date!');
}

module.exports = {
  getSeason,
};

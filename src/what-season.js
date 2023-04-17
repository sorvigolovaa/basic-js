function getSeason(date) {
  if (!date || Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date.getTime())) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  switch (month) {
    case 0:
    case 1:
    case 11:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "fall";
    default:
      throw new Error("Invalid date!");
  }
}



module.exports = {
  getSeason
};

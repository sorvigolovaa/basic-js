const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
  return t;
}

module.exports = {
  dateSample
};

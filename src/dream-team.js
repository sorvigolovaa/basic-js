const { NotImplementedError } = require('../extensions/index.js');
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const firstLetters = members
    .filter((name) => typeof name === 'string')
    .map((name) => name.trim()[0].toUpperCase())
    .sort();

  return firstLetters.join('');
}

module.exports = {
  createDreamTeam
};

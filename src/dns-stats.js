function getDNSStats(domains) {
  const result = {};

  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    let current = '';

    for (const part of parts) {
      current += `.${part}`;

      if (result[current]) {
        result[current] += 1;
      } else {
        result[current] = 1;
      }
    }

    if (parts.length === 1) {
      const single = `.${parts[0]}`;
      if (result[single]) {
        result[single] += 1;
      } else {
        result[single] = 1;
      }
    }
  }

  return result;
}



module.exports = {
  getDNSStats
};

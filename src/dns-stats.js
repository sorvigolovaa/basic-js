function getDNSStats(domains) {
  const stats = new Map();
  
  for (let domain of domains) {
    const parts = domain.split('.').reverse();
    let subdomain = '';
    for (let part of parts) {
      subdomain = `${part}.${subdomain}`;
      stats.set(subdomain, (stats.get(subdomain) || 0) + 1);
    }
  }

  const result = {};
  for (let [domain, count] of stats) {
    result[`.${domain}`] = count;
  }

  return result;
}


module.exports = {
  getDNSStats
};

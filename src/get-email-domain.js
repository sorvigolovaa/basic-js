function getEmailDomain(email) {
  var parts = email.split('@');
  var domain = parts.pop();
  while (domain[0] === '.') {
    domain = domain.slice(1);
  }
  return domain;
}



module.exports = {
  getEmailDomain
};

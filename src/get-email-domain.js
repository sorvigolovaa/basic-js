function getEmailDomain(email) {
  var domain = email.split('@')[1];
  return domain;
}


module.exports = {
  getEmailDomain
};

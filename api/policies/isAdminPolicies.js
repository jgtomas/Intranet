/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.isAuthenticated()) {
    if (req.user.isAdmin) {
      console.log('es admin');
      return next();
    }
  }  

  // User is not admin
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  console.log('no es admin');
  return res.redirect('/');
};

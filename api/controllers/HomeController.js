/**
 * HomeController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */




module.exports = {

  index: function(req, res) {
    res.view({
      user: req.user
    });

    // res.json({
    //   user: req.user
    // });
  },

  profile: function(req, res) {
    // res.view({
    //   user: req.user
    // });
    console.log("prfile action");
    
    res.json({
      user: req.user
    });
  }


};

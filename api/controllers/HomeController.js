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
    console.log(req);

    User.find(req.user.id).populate('vacaciones').exec(function(err,r){
      console.log(r);
      res.json(r);
    });


  }


};

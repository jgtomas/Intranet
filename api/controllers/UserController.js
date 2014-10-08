/**
 * UserController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var googleDrive = require('google-drive');

module.exports = {

  index: function(req, res) {
    res.view({
      user: req.user
    });
  },

  view: function (req, res) {
    var id=req.param('id',null);
    User.findOne({id:id}, function(err, user) {
      res.view('user/detail',{model: user});
    });
  }
  ,
  findAll: function (req, res) {
    User.find().exec(function (err, users) {
      console.log('entra a buscar todos los user');
      if (err) {
        res.send(400);
      } else {
        if (req.wantsJSON) {
          console.log(users);
          res.json(users);
        }
        else{
          res.send(users);
        }
      }
    });
  },

  documents: function (req, res) {
    var id=req.param('id',null);
    console.log('usuario ID:', id);

    User.findOne({id:id}, function(err, user) {
      googleDrive(user.token).files().list(null, callback)
      function callback(err, response, body) {
        if (err) return console.log('julenerr', err)
          // console.log('julenResponse', response);
          // console.log('julenbody', JSON.parse(body));
          var data = JSON.parse(body);
        if (req.wantsJSON) {
          res.json(data);
        }
        else{
          // console.log('julenbody', JSON.parse(body));
          res.view({
            data: data
          })
        }
      }
    });
  },

  findByName: function(req, res) {
    var name = req.param('name');
    User.findOne({name:name}).exec(function (err, users) {
      if (err) {
        res.send(400);
      } else {
        res.send(users);
      }
    });
  }












};

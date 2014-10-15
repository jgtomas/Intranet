/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  // adapter: 'localDiskDb',

  attributes: {
    puntos:  {
      type: 'integer',
      defaultsTo: 23
    },
    id:{
            model:'User'
    },
    anyo: {
      type: 'integer',
      defaultsTo: function (){ return new Date().getFullYear(); }
    }
  }
};

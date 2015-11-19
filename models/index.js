var Sequelize = require('sequelize');
var config = require('config');
//since I don't want to have all the models in one huge file we'll import them in
//and create any model relationships after all are imported

//initialize the database connection
var sequelize = new Sequelize(
  config.dbName,
  config.dbUsername,
  config.dbPassphrase
);

//load models
var models = [
  'User'
  // ,'Post'
];
models.forEach(function(model){
  module.exports[model] = sequelize.import('./models/' + model);
});


//create relationships
(function(m){
  // m.Post.belongsTo(m.User);
  // m.User.hasMany(m.Post);
})(module.exports);

module.exports.sequelize = sequelize;

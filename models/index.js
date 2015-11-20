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
  'User',
  'Ad',
  'Market',
  'Category',
  'AdImage'
];
models.forEach(function(model){
  module.exports[model] = sequelize.import(model);

});


//create relationships
(function(m){
   //m.Ad.belongsTo(m.User, {foreignKey: 'UserId'});
   m.Ad.belongsTo(m.User);

   m.User.hasMany(m.Ad, {foreignKey: 'UserId'});
   m.Ad.hasOne(m.Category, {foreignKey: 'CategoryId'});
   m.Ad.hasOne(m.Market, {foreignKey: 'MarketId'});
   m.Market.belongsToMany(m.Ad, {through: 'AdMarket'});
   m.Category.belongsToMany(m.Ad, {through: 'AdCategory'});
   m.Ad.hasMany(m.AdImage, {foreignKey: 'AdImageId'});
   m.AdImage.belongsTo(m.Ad, {foreignKey: 'AdId'});

})(module.exports);

module.exports.sequelize = sequelize;

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Market', {
    MarketId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Market: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

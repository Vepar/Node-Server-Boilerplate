module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

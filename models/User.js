var User = sequelize.define('User', {
  UserId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  FirstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  LastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  LastAccess: {
    type: Sequelize.DATE,
    allowNull:false,
    defaultValue: Date.now()
  },
  LastLogin: {
    type: Sequelize.DATE,
    allowNull:false,
    defaultValue: Date.now()
  },
  SessionToken: {
    type: Sequelize.STRING(1234),
    allowNull:false
  },
  CreatedAt: {
    type: Sequelize.DATE,
    allowNull:false,
    defaultValue: Date.now()
  },
  UpdatedAt: {
    type: Sequelize.DATE,
    allowNull: true
  }
});

module.exports = User;

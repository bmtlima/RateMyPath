module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {  // Changed from "tutorial" to "user"
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    }
  });

  return User;  // Return User model
};
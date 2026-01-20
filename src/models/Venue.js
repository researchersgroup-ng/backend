module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Venue", {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    location: DataTypes.STRING
  });
};

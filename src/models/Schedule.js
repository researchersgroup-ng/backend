module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Schedule", {
    type: {
      type: DataTypes.ENUM("lecture", "exam"),
      allowNull: false
    },
    level: {
      type: DataTypes.ENUM("100", "200", "300", "400"),
      allowNull: false
    },
    date: DataTypes.DATEONLY,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME
  });
};

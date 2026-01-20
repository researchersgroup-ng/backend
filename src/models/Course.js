module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Course", {
    courseCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    courseTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.ENUM("100", "200", "300", "400"),
      allowNull: false
    }
  });
};

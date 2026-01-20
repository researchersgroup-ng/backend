module.exports = (sequelize, DataTypes) => {
  return sequelize.define("CourseDepartment", {
    department: DataTypes.STRING
  });
};

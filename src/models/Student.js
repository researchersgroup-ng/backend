module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Student", {
    matricNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.ENUM("100", "200", "300", "400"),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

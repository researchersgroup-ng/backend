module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Lecturer", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("pending", "approved"),
      defaultValue: "pending"
    }
  });
};

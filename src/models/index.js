const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Student = require("./Student")(sequelize, Sequelize.DataTypes);
const Lecturer = require("./Lecturer")(sequelize, Sequelize.DataTypes);
const Course = require("./Course")(sequelize, Sequelize.DataTypes);
const Venue = require("./Venue")(sequelize, Sequelize.DataTypes);
const Schedule = require("./Schedule")(sequelize, Sequelize.DataTypes);

const CourseDepartment = require("./CourseDepartment")(sequelize, Sequelize.DataTypes);
const ScheduleDepartment = require("./ScheduleDepartment")(sequelize, Sequelize.DataTypes);
const LecturerCourse = require("./LecturerCourse")(sequelize, Sequelize.DataTypes);

// Relationships
Lecturer.belongsToMany(Course, { through: LecturerCourse });
Course.belongsToMany(Lecturer, { through: LecturerCourse });

Course.hasMany(CourseDepartment);
Schedule.hasMany(ScheduleDepartment);

Schedule.belongsTo(Course);
Schedule.belongsTo(Lecturer);
Schedule.belongsTo(Venue);

sequelize.sync();

module.exports = {
  sequelize,
  Student,
  Lecturer,
  Course,
  Venue,
  Schedule,
  CourseDepartment,
  ScheduleDepartment,
  LecturerCourse
};

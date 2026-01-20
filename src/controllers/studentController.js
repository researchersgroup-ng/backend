const {
  Schedule,
  ScheduleDepartment,
  Course,
  Venue,
  Lecturer
} = require("../models");

/* Get lecture timetable */
exports.getLectures = async (req, res) => {
  const { department, level } = req.user;

  const schedules = await Schedule.findAll({
    where: {
      type: "lecture",
      level
    },
    include: [
      {
        model: ScheduleDepartment,
        where: { department }
      },
      Course,
      Venue,
      Lecturer
    ],
    order: [["date", "ASC"], ["startTime", "ASC"]]
  });

  res.json(schedules);
};

/* Get exam timetable */
exports.getExams = async (req, res) => {
  const { department, level } = req.user;

  const schedules = await Schedule.findAll({
    where: {
      type: "exam",
      level
    },
    include: [
      {
        model: ScheduleDepartment,
        where: { department }
      },
      Course,
      Venue,
      Lecturer
    ],
    order: [["date", "ASC"], ["startTime", "ASC"]]
  });

  res.json(schedules);
};

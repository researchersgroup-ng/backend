const {
  Schedule,
  ScheduleDepartment
} = require("../models");
const { isVenueAvailable } = require("../services/conflictChecker");

/* Create Lecture or Exam */
exports.createSchedule = async (req, res) => {
  const {
    type,
    courseId,
    departments,
    level,
    date,
    startTime,
    endTime,
    venueId
  } = req.body;

  const available = await isVenueAvailable(
    venueId,
    date,
    startTime,
    endTime
  );

  if (!available) {
    return res.status(400).json({
      message: "Venue not available for selected time"
    });
  }

  const schedule = await Schedule.create({
    type,
    courseId,
    lecturerId: req.user.id,
    level,
    date,
    startTime,
    endTime,
    venueId
  });

  for (const dept of departments) {
    await ScheduleDepartment.create({
      scheduleId: schedule.id,
      department: dept
    });
  }

  res.json({ message: "Schedule created successfully" });
};

/* View own schedules */
exports.getMySchedules = async (req, res) => {
  const schedules = await Schedule.findAll({
    where: { lecturerId: req.user.id }
  });
  res.json(schedules);
};

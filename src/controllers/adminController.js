const { Lecturer, Venue, Course } = require("../models");

/* Approve Lecturer */
exports.approveLecturer = async (req, res) => {
  const { lecturerId } = req.params;

  const lecturer = await Lecturer.findByPk(lecturerId);
  if (!lecturer) return res.status(404).json({ message: "Not found" });

  lecturer.status = "approved";
  await lecturer.save();

  res.json({ message: "Lecturer approved" });
};

/* Create Venue */
exports.createVenue = async (req, res) => {
  const venue = await Venue.create(req.body);
  res.json(venue);
};

/* Create Course */
exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
};

/* Get pending lecturers */
exports.getPendingLecturers = async (req, res) => {
  const lecturers = await Lecturer.findAll({
    where: { status: "pending" }
  });
  res.json(lecturers);
};

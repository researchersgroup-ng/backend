const router = require("express").Router();
const lecturer = require("../controllers/lecturerController");
const lecturerOnly = require("../middlewares/lecturerOnly");

router.use(lecturerOnly);

router.post("/schedule", lecturer.createSchedule);
router.get("/schedules", lecturer.getMySchedules);

module.exports = router;

const router = require("express").Router();
const student = require("../controllers/studentController");
const studentOnly = require("../middlewares/studentOnly");

router.use(studentOnly);

router.get("/lectures", student.getLectures);
router.get("/exams", student.getExams);

module.exports = router;

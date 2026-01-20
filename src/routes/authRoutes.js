const router = require("express").Router();
const auth = require("../controllers/authController");

router.post("/admin/login", auth.adminLogin);
router.post("/lecturer/register", auth.registerLecturer);
router.post("/lecturer/login", auth.loginLecturer);
router.post("/student/register", auth.registerStudent);
router.post("/student/login", auth.loginStudent);

module.exports = router;

const router = require("express").Router();
const admin = require("../controllers/adminController");
const adminOnly = require("../middlewares/adminOnly");

router.use(adminOnly);

router.get("/lecturers/pending", admin.getPendingLecturers);
router.patch("/lecturers/:lecturerId/approve", admin.approveLecturer);

router.post("/venues", admin.createVenue);
router.post("/courses", admin.createCourse);

module.exports = router;

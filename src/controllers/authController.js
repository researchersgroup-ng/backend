const bcrypt = require("bcryptjs");
const { Student, Lecturer } = require("../models");
const generateToken = require("../utils/generateToken");

/* Admin login */
exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = generateToken({ role: "admin" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid admin credentials" });
};

/* Lecturer register */
exports.registerLecturer = async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  const lecturer = await Lecturer.create({
    email,
    password: hashed
  });

  res.json({ message: "Registration successful. Await admin approval." });
};

/* Lecturer login */
exports.loginLecturer = async (req, res) => {
  const { email, password } = req.body;

  const lecturer = await Lecturer.findOne({ where: { email } });
  if (!lecturer || lecturer.status !== "approved")
    return res.status(403).json({ message: "Not approved" });

  const valid = await bcrypt.compare(password, lecturer.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken({ id: lecturer.id, role: "lecturer" });
  res.json({ token });
};

/* Student register */
exports.registerStudent = async (req, res) => {
  const { matricNumber, department, level, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  await Student.create({
    matricNumber,
    department,
    level,
    password: hashed
  });

  res.json({ message: "Student registered" });
};

/* Student login */
exports.loginStudent = async (req, res) => {
  const { matricNumber, password } = req.body;

  const student = await Student.findOne({ where: { matricNumber } });
  if (!student) return res.status(404).json({ message: "Not found" });

  const valid = await bcrypt.compare(password, student.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken({
    id: student.id,
    role: "student",
    department: student.department,
    level: student.level
  });

  res.json({ token });
};

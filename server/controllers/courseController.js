const mongoose = require("mongoose");
const courseModel = require("../models/courseModel");

exports.featuredCourses = async function (req, res) {
  const response = await courseModel
    .find({})
    .select("coverImg rating enrolledStudents title")
    .limit(4);
  res.json(response);
};
exports.courses = async function (req, res) {
  const response = await courseModel
    .find({})
    .select("coverImg rating enrolledStudents title");
  res.json(response);
};
exports.getCourse = async function (req, res) {
  const id = req.params.id;
  const response = await courseModel.findById(id);
  res.json(response);
};

const mongoose = require("mongoose");
const courseModel = require("../models/courseModel");

exports.featuredCourses = async function (req, res) {
  const response = await courseModel
    .find({})
    .select("coverImg rating enrolledStudents title")
    .limit(4);
  res.json(response);
};

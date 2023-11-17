const { Schema, model } = require("mongoose");
const review = {
  author: String,
  body: String,
  rating: Number,
};
const courseSchema = new Schema({
  title: String,
  rating: Number,
  enrolledStudents: Number,
  learningGoals: [String],
  prerequisites: [String],
  reviews: [review],
  episodes: [String],
  coverImg: String,
});

module.exports = model("Course", courseSchema);

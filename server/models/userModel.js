const { Schema, model } = require("mongoose");
const course = {
  courseId: Schema.Types.ObjectId,
  eps: [Number],
  _id: false,
};
const userSchema = new Schema({
  userId: Number,
  episodesWatched: [course],
});

module.exports = model("User", userSchema);

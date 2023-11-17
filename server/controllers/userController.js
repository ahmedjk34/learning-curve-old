const userModel = require("../models/userModel");

exports.getUser = async function (req, res) {
  const id = req.params.id;
  const user = await userModel.where("userId").equals(id);
  res.json(user);
};
exports.createUser = async function (req, res) {
  id = req.body.userId;
  eps = req.body.episodesWatched;
  //guard
  if (!id | !eps) return;
  const userExists = await userModel.where("userId").equals(id);
  if (!userExists.length) {
    await userModel.create({ userId: id, episodesWatched: eps });
  }
};
exports.enrollInCourse = async function (req, res) {
  userId = req.body.userId;
  courseId = req.params.id;
  await userModel.updateOne(
    { userId: userId },
    {
      $addToSet: {
        episodesWatched: {
          courseId: courseId,
          eps: [],
        },
      },
    }
  );
};
exports.updateWatchedEpisodes = async function (req, res) {
  userId = req.body.userId;
  courseId = req.body.courseId;
  eps = JSON.parse(req.body.episodesWatched);
  console.log(userId, courseId, eps);
  await userModel.updateOne(
    { userId: userId, "episodesWatched.courseId": courseId },
    {
      $set: {
        "episodesWatched.$.eps": eps,
      },
    }
  );
};

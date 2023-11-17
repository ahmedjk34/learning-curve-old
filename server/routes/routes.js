const { Router } = require("express");
const courseController = require("../controllers/courseController");
const userController = require("../controllers/userController");
const router = Router();

/* GET index page. */
router.get("/featuredCourses", courseController.featuredCourses);
router.get("/courses", courseController.courses);
router.get("/course/:id", courseController.getCourse);
router.get("/user/:id", userController.getUser);
router.post("/user/:id", userController.createUser);
router.post("/user/course/:id", userController.enrollInCourse);
router.post("/user/update-eps", userController.updateWatchedEpisodes);

module.exports = router;

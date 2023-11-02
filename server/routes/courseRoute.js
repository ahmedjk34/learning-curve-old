const { Router } = require("express");
const courseController = require("../controllers/courseController");
const router = Router();

/* GET index page. */
router.get("/featuredCourses", courseController.featuredCourses);
router.get("/courses", courseController.courses);

module.exports = router;

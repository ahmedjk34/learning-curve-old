const { Router } = require("express");
const courseController = require("../controllers/courseController");
const router = Router();

/* GET index page. */
router.get("/featuredCourses", courseController.featuredCourses);

module.exports = router;

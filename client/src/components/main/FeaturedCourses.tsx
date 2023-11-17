import styles from "../../styles/pages/main.module.scss";
import { useEffect, useState } from "react";
import { Course } from "../../Types";
import axios from "axios";
import CourseCard from "../CourseCard";

function FeaturedCourses() {
  const [featuredCourses, setFeaturedCourses] = useState<null | Course[]>();
  useEffect(() => {
    axios
      .get("http://localhost:3000/featuredCourses")
      .then((response) => setFeaturedCourses(response.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className={styles.featuredCourses}>
      <h2>Featured Courses</h2>
      <div className={styles.courses}>
        {featuredCourses?.map((course, key) => (
          <CourseCard course={course} key={key + course._id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCourses;

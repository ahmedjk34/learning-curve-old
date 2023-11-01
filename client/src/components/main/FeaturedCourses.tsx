import styles from "../../styles/pages/main.module.scss";
import { useEffect, useState } from "react";
import { Course } from "../../Types";
import { Rating } from "react-simple-star-rating";
import axios from "axios";

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
          <div key={course.title + key} className={styles.course}>
            <img
              src={course.coverImg}
              alt="Cover Image"
              className={styles.coverImg}
            ></img>
            <div>
              <Rating
                initialValue={course.rating}
                readonly={true}
                size={25}
                allowFraction={true}
              ></Rating>
              <h4>{course.enrolledStudents} Students Enrolled</h4>
            </div>
            <h3>{course.title}</h3>
            <button>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCourses;

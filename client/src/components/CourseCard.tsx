import styles from "../styles/pages/main.module.scss";
import { Rating } from "react-simple-star-rating";
import { Course } from "../Types";

type Props = {
  course: Course;
};

function CourseCard({ course }: Props) {
  return (
    <div key={course.title} className={styles.course}>
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
  );
}

export default CourseCard;

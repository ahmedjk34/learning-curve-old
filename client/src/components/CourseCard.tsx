import styles from "../styles/pages/main.module.scss";
import { Rating } from "react-simple-star-rating";
import { Course, CustomUser } from "../Types";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type CourseProps = {
  course: Course;
};
type ButtonProps = {
  courseId: String;
};
function EnrollButton({ courseId }: ButtonProps) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const navigation = useNavigate();
  if (!isAuthenticated)
    return <button onClick={() => loginWithRedirect()}>Enroll Now</button>;
  const userId = user?.sub?.substring(user?.sub?.indexOf("|") + 1);
  axios.get(`http://localhost:3000/user/${userId}`).then((response) => {
    const userData = response.data[0] as CustomUser;
    userData.episodesWatched.forEach((course) => {
      if (courseId == course.courseId) {
        setIsEnrolled(true);
      }
    });
  });
  if (isEnrolled) {
    return (
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => navigation(`/course/${courseId}`)}
      >
        Continue Watching
      </button>
    );
  }
  return (
    <button
      onClick={() => {
        axios.post(`http://localhost:3000/user/course/${courseId}`, {
          userId: userId,
          courseId: courseId,
        });
        navigation(`/course/${courseId}`);
      }}
    >
      Enroll Now
    </button>
  );
}

function CourseCard({ course }: CourseProps) {
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
      <EnrollButton courseId={course._id}></EnrollButton>
    </div>
  );
}

export default CourseCard;

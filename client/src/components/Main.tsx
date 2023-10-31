import styles from "../styles/pages/main.module.scss";
import heroImg from "../assets/heroImg.jpg";
import certificationsImg from "../assets/certifications.png";
import learnersImg from "../assets/learners.png";
import coursesImg from "../assets/courses.png";
import instructorsImg from "../assets/instructors.png";
import { useEffect, useState } from "react";
import { Course } from "../Types";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import data from "../components/reviewData";
type Props = {};

function Hero() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          <h1>Choose from our unique collection of courses</h1>
          <h3>
            We have multiple high quality courses that cover anything you want
            to learn , join us for a chance at a career or just a new hobby. You
            are one click away from transforming your life
          </h3>
          <div className={styles.buttonsHolder}>
            <button>Explore Courses</button>
            <button>Start Learning</button>
          </div>
        </div>
        <img src={heroImg} alt="Hero Image"></img>
      </div>
    </>
  );
}

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

function MoreAboutUs() {
  return (
    <div className={styles.moreAboutUs}>
      <h2>More About Us</h2>
      <div className={styles.info}>
        <div>
          <img src={learnersImg} alt="More About Us"></img>
          <h2>{1200}</h2>
          <h4>Learners</h4>
        </div>
        <div>
          <img src={certificationsImg} alt="More About Us"></img>
          <h2>2400</h2>
          <h4>Certifications</h4>
        </div>
        <div>
          <img src={instructorsImg} alt="More About Us"></img>
          <h2>120</h2>
          <h4>Instructors</h4>
        </div>
        <div>
          <img src={coursesImg} alt="More About Us"></img>
          <h2>300</h2>
          <h4>Courses</h4>
        </div>
      </div>
    </div>
  );
}
function Reviews() {
  return (
    <div className={styles.reviews}>
      <h2>Learners' Reviews</h2>
      <div>
        {data?.map((review, index) => {
          return (
            <div className={styles.reviewCard}>
              <h4>"{review.body}"</h4>
              <div className={styles.courseInfo}>
                <div>
                  <img alt="author pfp" src={review.authorImg}></img>
                  <h5>{review.author}</h5>
                </div>
                <Rating
                  initialValue={review.rating}
                  readonly={true}
                  size={25}
                  allowFraction={true}
                ></Rating>
              </div>
              <div className={styles.enroll}>
                <button>Enroll</button>
                <h3>{review.courseTitle}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function Main({}: Props) {
  return (
    <div className={styles.main}>
      <Hero />
      <FeaturedCourses />
      <MoreAboutUs />
      <Reviews />
    </div>
  );
}

export default Main;

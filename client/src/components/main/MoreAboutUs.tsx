import styles from "../../styles/pages/main.module.scss";
import certificationsImg from "../../assets/certifications.png";
import learnersImg from "../../assets/learners.png";
import coursesImg from "../../assets/courses.png";
import instructorsImg from "../../assets/instructors.png";

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

export default MoreAboutUs;

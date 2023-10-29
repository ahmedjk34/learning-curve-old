import styles from "../styles/pages/main.module.scss";
import heroImg from "../assets/heroImg.jpg";
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
        <img src={heroImg} alt="Hero Image"></img>*/
      </div>
    </>
  );
}

function FeaturedCourses() {
  return (
    <div className={styles.featuredCourses}>
      <h2>Featured Courses</h2>
      <div className={styles.courses}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
function MoreAboutUs() {
  return <div></div>;
}
function Reviews() {
  return <div></div>;
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

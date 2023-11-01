import styles from "../../styles/pages/main.module.scss";
import heroImg from "../../assets/heroImg.jpg";
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

export default Hero;

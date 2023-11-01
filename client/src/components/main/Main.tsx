import styles from "../../styles/pages/main.module.scss";

import Hero from "./Hero";
import FeaturedCourses from "./FeaturedCourses";
import MoreAboutUs from "./MoreAboutUs";
import Reviews from "./Reviews";
type Props = {};

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

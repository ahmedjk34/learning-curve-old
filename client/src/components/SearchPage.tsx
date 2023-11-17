import { useEffect, useState } from "react";
import styles from "../styles/pages/searchPage.module.scss";
import { BsSearch } from "react-icons/bs";
import { Course } from "../Types";
import axios from "axios";
import CourseCard from "./CourseCard";

type Props = {};
function SearchPage({}: Props) {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [query, setQuery] = useState("");
  const filteredCourses = courses?.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filteredCourses);
  useEffect(() => {
    axios
      .get("http://localhost:3000/courses")
      .then((response) => setCourses(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={styles.searchPage}>
      <div className={styles.searchHolder}>
        <input
          className={styles.searchBar}
          name="search"
          type="text"
          placeholder="Search Here"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <div>
          <BsSearch color="white" size="22" />
        </div>
      </div>
      <div className={styles.courses}>
        {filteredCourses?.map((course, key) => (
          <CourseCard course={course} key={key + course._id} />
        ))}
        {filteredCourses?.map((course, key) => (
          <CourseCard course={course} key={key + course._id} />
        ))}
        {filteredCourses?.map((course, key) => (
          <CourseCard course={course} key={key + course._id} />
        ))}
        {filteredCourses?.map((course, key) => (
          <CourseCard course={course} key={key + course._id} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;

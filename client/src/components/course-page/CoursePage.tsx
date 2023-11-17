import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Course } from "../../Types";
import styles from "../../styles/pages/coursePage.module.scss";
import { Rating } from "react-simple-star-rating";
import ReactPlayer from "react-player";

type Props = {};

function CoursePage({}: Props) {
  const [data, setData] = useState<Course | null>();
  const [currentEp, setCurrentEp] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/course/${id}`)
      .then((response) => setData(response.data))
      .catch((e) => console.log(e));
    axios.post(`http://localhost:3000/user/update`, {
      userId: 106513814026471370000,
      episodesWatched: [
        {
          courseId: 123,
          eps: [1, 2, 3],
        },
      ],
    });
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className={styles.coursePage}>
      <div className={styles.mainInfo}>
        <div>
          <h1>{data?.title}</h1>
          <div className={styles.secondaryInfo}>
            {" "}
            <Rating
              initialValue={data?.rating}
              readonly={true}
              size={40}
              allowFraction={true}
            ></Rating>
            <h2>{data?.enrolledStudents} Students Enrolled</h2>
          </div>
        </div>
        <img alt="Course Image" src={data?.coverImg}></img>
      </div>
      <div className={styles.goals}>
        <div>
          <h2>❖ What Will You Learn From This Course?</h2>
          <ul>
            {data?.learningGoals.map((goal, index) => (
              <li key={goal + index}>{goal}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>❖ What Are The Prerequisites For Starting This Course?</h2>
          <ul>
            {data?.prerequisites.map((prerequisite, index) => (
              <li key={prerequisite + index}>{prerequisite}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.viewCourse}>
        <h2>Start Learning</h2>

        <div>
          <div className={styles.epList}>
            {data?.episodes.map((_episode, index) => (
              <div onClick={() => setCurrentEp(index)} key={"list" + index}>
                Episode {index + 1}
              </div>
            ))}
          </div>
          {data?.episodes.map((episode, index) => (
            <div
              className={`${styles.player} ${
                currentEp == index ? styles.active : null
              }`}
            >
              <ReactPlayer
                style={{
                  visibility: currentEp == index ? "visible" : "hidden",
                }}
                playing={currentEp == index ? true : false}
                url={episode}
                key={episode + index}
                height={400}
                width={700}
              />
            </div>
          ))}
          <button className={styles.completeBtn}>
            Mark Episode as Complete ✓
          </button>
        </div>
        <div className={styles.reviews}></div>
      </div>
    </div>
  );
}

{
  /* <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width="50%"
        /> */
}
export default CoursePage;

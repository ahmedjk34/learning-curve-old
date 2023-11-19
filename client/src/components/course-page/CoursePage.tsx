import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Course, CustomUser } from "../../Types";
import styles from "../../styles/pages/coursePage.module.scss";
import { Rating } from "react-simple-star-rating";
import ReactPlayer from "react-player";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {};

function CoursePage({}: Props) {
  const [data, setData] = useState<Course | null>();
  const [currentEp, setCurrentEp] = useState(0);
  const [finishedEps, setFinishedEps] = useState<[Number] | null>();
  const [markEpAsDone, setMarkEpAsDone] = useState(false);
  const { id } = useParams();
  const { isLoading, isAuthenticated, loginWithRedirect, user } = useAuth0();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/course/${id}`)
      .then((response) => setData(response.data))
      .catch((e) => console.log(e));
    if (!isLoading && isAuthenticated) {
      const userId = user?.sub?.substring(user?.sub?.indexOf("|") + 1);
      axios.get(`http://localhost:3000/user/${userId}`).then((response) => {
        const userData = response.data[0] as CustomUser;
        userData.episodesWatched.forEach((course: any) => {
          if (data?._id == course.courseId) {
            setFinishedEps(course.eps);
            course.eps.includes(0) ? setMarkEpAsDone(true) : null;
          }
        });
      });
    }
  }, [isLoading]);
  useEffect(() => {
    const userId = user?.sub?.substring(user?.sub?.indexOf("|") + 1);
    console.log(finishedEps);
    if (!isLoading && !(finishedEps == undefined)) {
      axios.post("http://localhost:3000/user/update-eps", {
        userId: userId,
        courseId: data?._id,
        episodesWatched: finishedEps,
      });
    }
  }, [isLoading, finishedEps]);
  useEffect(() => {
    let isComplete = false;
    if (!isLoading) {
      finishedEps?.forEach((ep) => {
        if (ep == currentEp) isComplete = true;
      });
    }
    isComplete ? setMarkEpAsDone(true) : setMarkEpAsDone(false);
  }, [isLoading, currentEp]);
  //if the user got into the course page without being logged (via URL for e.g)
  !isLoading && !isAuthenticated && loginWithRedirect();

  return (
    !isLoading && (
      <>
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
                  key={"U12" + index}
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
              {markEpAsDone ? (
                <button
                  className={`${styles.completeBtn} ${styles.active}`}
                  onClick={() => {
                    //@ts-ignore
                    setFinishedEps((prev) =>
                      prev?.filter((value) => value != currentEp)
                    );
                    setMarkEpAsDone(false);
                  }}
                >
                  Episode is Completed ✓
                </button>
              ) : (
                <button
                  className={styles.completeBtn}
                  onClick={() => {
                    //@ts-ignore
                    setFinishedEps((prev) => [...prev, currentEp]);
                    setMarkEpAsDone(true);
                  }}
                >
                  Mark Episode as Complete ✓
                </button>
              )}
            </div>
            <div className={styles.reviews}></div>
          </div>
        </div>
      </>
    )
  );
}

export default CoursePage;

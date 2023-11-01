import styles from "../../styles/pages/main.module.scss";
import { Rating } from "react-simple-star-rating";
import data from "./reviewData";
function Reviews() {
  return (
    <div className={styles.reviews}>
      <h2>Learners' Reviews</h2>
      <div>
        {data?.map((review, index) => {
          return (
            <div className={styles.reviewCard} key={"rc" + index}>
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
export default Reviews;

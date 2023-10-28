import styles from "../styles/pages/nav.module.scss";
import logo from "../assets/logo.png";
import pfp from "../assets/personal.png";
import { AiOutlineMenu } from "react-icons/ai";
type Props = {};

const groupStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
};

function Nav({}: Props) {
  return (
    <div className={styles.nav}>
      <img src={logo} className={styles.logo} alt="Logo"></img>
      <div style={groupStyle}>
        <div className={styles.navOptions}>
          <h3>Home</h3>
          <h3>Courses</h3>
          <h3>About</h3>
        </div>
        <div className={styles.profileMenu}>
          <AiOutlineMenu color="white" className={styles.icon} size="20" />
          <img src={pfp} alt="Profile Picture"></img>
        </div>
      </div>
    </div>
  );
}

export default Nav;

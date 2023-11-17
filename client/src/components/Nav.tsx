import styles from "../styles/pages/nav.module.scss";
import logo from "../assets/logo.png";

import { AiOutlineMenu } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";
type Props = {};

const groupStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
};

function Nav({}: Props) {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  useEffect(() => {
    //in case of login out
    if (!isAuthenticated) return;
    //when logging in
    const userId = user?.sub?.substring(user?.sub?.indexOf("|") + 1);
    axios.post(`http://localhost:3000/user/${userId}`, {
      userId: userId,
      episodesWatched: [],
    });
  }, [isAuthenticated]);
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
          {!isLoading &&
            (isAuthenticated ? (
              <>
                <AiOutlineMenu
                  color="white"
                  className={styles.icon}
                  size="20"
                />
                <img src={user?.picture} alt="Profile Picture"></img>
                <div className={styles.dropdown}>
                  <h4>Courses</h4>
                  <h4
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log out
                  </h4>
                </div>
              </>
            ) : (
              <div>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Nav;

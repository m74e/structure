import NotificationIcon from "../../CustomIcons/NotificationIcon";
import Container from "../Container/container";
import styles from "./mainHeader.module.css";
import SearchInput from "./SearchInput/searchInput";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MainHeader = () => {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link to={"/"}>
            {" "}
            <img className={styles.logo} src="/logo.png" />
          </Link>
          <div className={styles.pages}>
            <Link to="/">
              <a
                className={
                  location.pathname === "/"
                    ? `${styles.active}`
                    : `${styles.noneActive}`
                }
              >
                Home
              </a>
            </Link>

            <Link to="/dashboard">
              <a
                className={
                  location.pathname === "/dashboard"
                    ? `${styles.active}`
                    : `${styles.noneActive}`
                }
              >
                dashboard
              </a>
            </Link>
            <a>Settings</a>
          </div>
          <div className={styles.actions}>
            <SearchInput />
            <button className={styles.notificationBtn}>
              <div className={styles.dot}></div>
              <NotificationIcon />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;

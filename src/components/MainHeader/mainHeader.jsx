import NotificationIcon from "../../CustomIcons/NotificationIcon";
import Container from "../Container/container";
import styles from "./mainHeader.module.css";
import SearchInput from "./SearchInput/searchInput";
import { Link } from "react-router-dom";
const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Container>
        
        <div className={styles.content}>
         <Link to={"/"} > <img className={styles.logo} src="/logo.png" /></Link >
          <div className={styles.pages}>
           <Link to={"/"}> <a className={styles.active}>Home</a></Link>
            <Link to="/dashboard"><a>Dashboard</a> </Link>
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

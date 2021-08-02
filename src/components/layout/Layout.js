import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <div className={styles.main}>{props.children}</div>
    </>
  );
};

export default Layout;

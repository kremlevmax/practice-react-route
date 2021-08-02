import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Great Quotes</div>
      <div className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/quotelist' activeClassName={styles.active}>
              Quotelist
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName={styles.active}>
              Add New
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;

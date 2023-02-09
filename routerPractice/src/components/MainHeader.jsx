import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

// navLink rather than just Link will allow us to set an activeClassName which
// gives us a parm to set styling to highlight the current active page
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {/* <li>
            <a href="/welcome">Welcome</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li> */}
          <li>
            {/* <Link to="/welcome">Welcome</Link> */}
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

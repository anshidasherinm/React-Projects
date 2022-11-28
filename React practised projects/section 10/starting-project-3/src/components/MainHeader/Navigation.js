import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";

import classes from "./Navigation.module.css";

// const Navigation = (props) => {
const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
    //       <nav className={classes.nav}>
    //         <ul>
    //           {ctx.isLoggedIn && (
    //             //earlier props.isLoggIn
    //             <li>
    //               <a href="/">Users</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             //earlier props.isLoggIn
    //             <li>
    //               <a href="/">Admin</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             //earlier props.isLoggIn
    //             <li>
    //               <button onClick={props.onLogout}>Logout</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>

    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          //earlier props.isLoggIn
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          //earlier props.isLoggIn
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          //earlier props.isLoggIn
          <li>
            {/* <button onClick={props.onLogout}>Logout</button> */}
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

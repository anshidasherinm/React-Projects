// import React, { useState, useEffect } from "react";
import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1"); //storing in local storage
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  //   return (
  //     // <React.Fragment>
  //     <AuthContext.Provider
  //       value={{
  //         // isLoggedIn: false,
  //         isLoggedIn: isLoggedIn,
  //         onLogout: logoutHandler,
  //       }}
  //     >
  //       <MainHeader />
  //       {/* removed isAuthenticated={isLoggedIn}  from aboe line  */}
  //       <main>
  //         {!isLoggedIn && <Login onLogin={loginHandler} />}
  //         {isLoggedIn && <Home onLogout={logoutHandler} />}
  //         {/* //for the onLogin and onLogout its is used in special cases, one with button component and other not with component (later case we will not use ctx like in any time */}
  //       </main>
  //     </AuthContext.Provider>
  //     // </React.Fragment>
  //   );
  // }

  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      {/* removed isAuthenticated={isLoggedIn}  from aboe line  */}
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
        {/* //for the onLogin and onLogout its is used in special cases, one with button component and other not with component (later case we will not use ctx like in any time */}
      </main>
    </React.Fragment>
  );
}

export default App;

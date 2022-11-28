import { Route, Routes, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
        {/* <Route
          // path="/welcome/new-user"
          path="new-user"
          element={<p>Welcome, new user!</p>}
        ></Route> */}
        {/* rewriting this in parent component */}
        <Outlet />
      </Routes>
    </section>
  );
};

export default Welcome;

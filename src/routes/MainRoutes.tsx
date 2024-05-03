import { Route, Routes } from "react-router-dom";

import SigninForm from "../pages/auth/Signin";
import SignupForm from "../pages/auth/Signup";
import Home from "../pages/Home";
import MovieListings from "../pages/MovieListings";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/listing" element={<MovieListings />}></Route>
      <Route path="/signup" element={<SignupForm />}></Route>
      <Route path="/signin" element={<SigninForm />}></Route>
    </Routes>
  );
}

export default MainRoutes;

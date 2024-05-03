import { Route, Routes } from "react-router-dom";

import AddNewMovie from "../pages/AddNewMovie";
import SigninForm from "../pages/auth/Signin";
import SignupForm from "../pages/auth/Signup";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import MovieListings from "../pages/MovieListings";
import AuthRoutes from "./AuthRoutes";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/listing" element={<MovieListings />}></Route>
      <Route path="/signup" element={<SignupForm />}></Route>
      <Route path="/signin" element={<SigninForm />}></Route>
      <Route element={<AuthRoutes allowListedRoles={["ADMIN"]} />}>
        <Route path="/addmovie" element={<AddNewMovie />} />
      </Route>
      <Route element={<AuthRoutes allowListedRoles={["ADMIN", "CLIENT"]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;

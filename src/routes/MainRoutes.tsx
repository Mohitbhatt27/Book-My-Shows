import { Route, Routes } from "react-router-dom";

import AboutMovie from "../pages/AboutMovie";
import AddNewMovie from "../pages/AddNewMovie";
import AddNewShows from "../pages/AddNewShows";
import AddNewTheatre from "../pages/AddNewTheatre";
import SigninForm from "../pages/auth/Signin";
import SignupForm from "../pages/auth/Signup";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import MovieListings from "../pages/MovieListings";
import ShowSeatSelection from "../pages/ShowSeatSelection";
import AuthRoutes from "./AuthRoutes";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/movie/listing/:id" element={<MovieListings />}></Route>
      <Route path="/about/:id" element={<AboutMovie />}></Route>

      <Route path="/signup" element={<SignupForm />}></Route>
      <Route path="/signin" element={<SigninForm />}></Route>

      <Route path="/about/buyTickets" element={<ShowSeatSelection />}></Route>

      <Route element={<AuthRoutes allowListedRoles={["ADMIN", "CLIENT"]} />}>
        <Route path="/addmovie" element={<AddNewMovie />} />
      </Route>
      <Route element={<AuthRoutes allowListedRoles={["ADMIN", "CLIENT"]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<AuthRoutes allowListedRoles={["ADMIN", "CLIENT"]} />}>
        <Route path="/addtheatre" element={<AddNewTheatre />} />
      </Route>
      <Route element={<AuthRoutes allowListedRoles={["ADMIN", "CLIENT"]} />}>
        <Route path="/addshows" element={<AddNewShows />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;

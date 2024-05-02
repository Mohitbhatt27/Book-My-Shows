import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import MovieListings from "../pages/MovieListings";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/listing" element={<MovieListings />}></Route>
    </Routes>
  );
}

export default MainRoutes;

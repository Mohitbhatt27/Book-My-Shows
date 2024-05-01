import { IoSearch } from "react-icons/io5";

import defaultpic from "../assets/defaultpic.avif";
import logoDark from "../assets/logoDark.svg";

function Navbar() {
  return (
    <div className="navbar bg-[#333545] ">
      <div className="flex-1 ml-8">
        <div className="h-12 mr-8">
          <img className="h-[100%] w-36" src={logoDark} />
        </div>
        <div className="w-3/5 flex items-center justify-center border border-gray-400 rounded-xl bg-white">
          <IoSearch className="text-[#777777] ml-2 h-12 w-4" />

          <div className="form-control w-full ">
            <input
              type="text"
              placeholder="Search for movies, events, Plays, Sports and Activities"
              className="input input-bordered md:w-auto border-none focus:outline-none p-0 ml-2 "
            />
          </div>
        </div>
      </div>
      <div className="flex-none gap-2 mr-8">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={defaultpic} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm text-white dropdown-content bg-[#333545] rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

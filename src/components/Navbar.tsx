import { IoSearch } from "react-icons/io5";

import defaultpic from "../assets/defaultpic.avif";
import logoDark from "../assets/logoDark.svg";

function Navbar() {
  return (
    <div className="w-full bg-[#333545] mb-5">
      <div className="navbar w-[80vw] mx-auto ">
        <div className="flex-1 ml-4">
          <div className="h-12 mr-4">
            <img className="h-[100%] w-36" src={logoDark} />
          </div>

          <div className="hidden lg:w-3/5 lg:flex lg:items-center lg:justify-center lg:border lg:border-gray-400 lg:rounded-xl lg:bg-white">
            <IoSearch className="hidden lg:text-[#777777] lg:ml-2 lg:h-12 lg:w-4  lg:block" />

            <div className=" hidden lg:form-control lg:w-full ">
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
      <div className="text-white bg-[#22232d]">
        <div className="flex gap-4 w-[80vw] ml-[11rem] py-2 ">
          <div className="cursor-pointer">Movies</div>
          <div className="cursor-pointer">Events</div>
          <div className="cursor-pointer">Stream</div>
          <div className="cursor-pointer">Plays</div>
          <div className="cursor-pointer">Sports</div>
          <div className="cursor-pointer">Activities</div>
          <div className="cursor-pointer">Discover</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

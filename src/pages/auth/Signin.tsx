import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/hooks";
import HomeLayout from "../../layouts/HomeLayout";
import { signinSlice } from "../../redux/AuthSlice";

const SigninForm: React.FC = () => {
  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch(); 
  const navigate = useNavigate(); 

  function handleSubmit (e: React.FormEvent) {
    e.preventDefault();
    dispatch(signinSlice(signinDetails));
    navigate("/");
  }

  return (
    <HomeLayout>
      <div className="flex font-roboto justify-center items-center h-screen bg-gradient-to-br from-gray-300 to-gray-600">
        <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl text-centert text-[#F84464] mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={signinDetails.email}
                onChange={(e) =>
                  setSigninDetails({ ...signinDetails, email: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={signinDetails.password}
                onChange={(e) =>
                  setSigninDetails({
                    ...signinDetails,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#F84464] hover:bg-[#F84464] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <span className="text-gray-700">Don't have an account? </span>
            <button
              className="text-green-500 hover:text-green-700 font-semibold"
              onClick={() => navigate("/signup")}
            >
              Sign up here
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default SigninForm;

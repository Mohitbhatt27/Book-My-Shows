import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/hooks";
import HomeLayout from "../../layouts/HomeLayout";
import { signupSlice } from "../../redux/AuthSlice";

const SignupForm: React.FC = () => {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    userType: "CUSTOMER",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      dispatch(signupSlice(signupDetails));
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HomeLayout>
      <div className="flex font-roboto justify-center items-center h-screen bg-gradient-to-br from-gray-300 to-gray-600">
        <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl text-center text-[#F84464] mb-6">SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={signupDetails.name}
                onChange={(e) =>
                  setSignupDetails({ ...signupDetails, name: e.target.value })
                }
                required
              />
            </div>
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
                value={signupDetails.email}
                onChange={(e) =>
                  setSignupDetails({ ...signupDetails, email: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
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
                value={signupDetails.password}
                onChange={(e) =>
                  setSignupDetails({
                    ...signupDetails,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="userType"
              >
                User Role
              </label>
              <select
                id="userType"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={signupDetails.userType}
                onChange={(e) =>
                  setSignupDetails({
                    ...signupDetails,
                    userType: e.target.value.toUpperCase(),
                  })
                }
                required
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
                <option value="client">Client</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#F84464] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <span className="text-gray-700">Already have an account? </span>
            <button
              className="text-blue-500 hover:text-blue-700 font-semibold"
              onClick={() => navigate("/signin")}
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default SignupForm;

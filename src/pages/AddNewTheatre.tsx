import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import HomeLayout from "../layouts/HomeLayout";
import { getAllMovies } from "../redux/MovieSlice";
import { addNewTheatre } from "../redux/TheatreSlice";
import TheatreDataTypes from "../types/TheatreData";

function AddNewTheatre() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TheatreDataTypes>();

  const [submitStatus, setSubmitStatus] = useState("");
  const dispatch = useAppDispatch();

  const movieList = useAppSelector((state) => state.movies.movieList);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const onSubmit = (data: TheatreDataTypes) => {
    setSubmitStatus("Theatre submitted successfully!");
    dispatch(addNewTheatre(data));
  };

  return (
    <HomeLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Add New Theatre</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-white p-6 rounded-md shadow-md"
        >
          {/* Theatre Name */}
          <div>
            <label className="block text-gray-700">Theatre Name</label>
            <input
              type="text"
              {...register("name", { required: true, minLength: 5 })}
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.name && (
              <p className="text-red-500">Name must be at least 5 characters</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              {...register("description")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              {...register("city", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.city && <p className="text-red-500">City is required</p>}
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-gray-700">Pincode</label>
            <input
              type="number"
              {...register("pincode", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.pincode ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.pincode && (
              <p className="text-red-500">Pincode is required</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              {...register("address")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Movies */}
          <div>
            <label className="block text-gray-700">Movies</label>
            {movieList.map((movie) => (
              <div key={movie._id} className="flex items-center">
                <input
                  type="checkbox"
                  value={movie._id}
                  {...register("movies", { required: true })}
                  className={`mr-2 ${
                    errors.movies ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <span>{movie.name}</span>
              </div>
            ))}
            {errors.movies && (
              <p className="text-red-500">Please select at least one movie</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
        {submitStatus && <p className="text-green-500 mt-4">{submitStatus}</p>}
      </div>
    </HomeLayout>
  );
}

export default AddNewTheatre;

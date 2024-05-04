import { useState } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../hooks/hooks";
import HomeLayout from "../layouts/HomeLayout";
import { createMovie } from "../redux/MovieSlice";

interface MovieData {
  name: string;
  description: string;
  casts: string;
  trailerUrl: string;
  language: string;
  releaseDate: string;
  director: string;
  releaseStatus: string;
  poster: string;
  genre: string;
  rating: string;
  voteCount: string;
}

function AddNewMovie() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieData>();

  const [submitStatus, setSubmitStatus] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (data: MovieData) => {
    const movieData = {
      ...data,
      casts: data.casts.split(",").map((cast) => cast.trim()), 
    };
    console.log("Form Submitted", data);
    setSubmitStatus("Movie submitted successfully!");
    dispatch(createMovie(movieData));
  };

  return (
    <HomeLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Add New Movie</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-white p-6 rounded-md shadow-md"
        >
          {/* Movie Name */}
          <div>
            <label className="block text-gray-700">Movie Name</label>
            <input
              type="text"
              {...register("name", { required: true, minLength: 2 })}
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              {...register("description", { required: true, minLength: 5 })}
              className={`w-full px-4 py-2 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.description && (
              <p className="text-red-500">
                Description must be at least 5 characters
              </p>
            )}
          </div>

          {/* Casts */}
          <div>
            <label className="block text-gray-700">Casts</label>
            <input
              type="text"
              {...register("casts", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.casts ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.casts && (
              <p className="text-red-500">
                Casts are required (comma-separated)
              </p>
            )}
          </div>

          {/* Trailer URL */}
          <div>
            <label className="block text-gray-700">Trailer URL</label>
            <input
              type="text"
              {...register("trailerUrl", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.trailerUrl ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.trailerUrl && (
              <p className="text-red-500">Trailer URL is required</p>
            )}
          </div>

          {/* Language */}
          <div>
            <label className="block text-gray-700">Language</label>
            <input
              type="text"
              {...register("language", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.language ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.language && (
              <p className="text-red-500">Language is required</p>
            )}
          </div>

          {/* Release Date */}
          <div>
            <label className="block text-gray-700">Release Date</label>
            <input
              type="date"
              {...register("releaseDate", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.releaseDate ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.releaseDate && (
              <p className="text-red-500">Release Date is required</p>
            )}
          </div>

          {/* Director */}
          <div>
            <label className="block text-gray-700">Director</label>
            <input
              type="text"
              {...register("director", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.director ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.director && (
              <p className="text-red-500">Director is required</p>
            )}
          </div>

          {/* Release Status */}
          <div>
            <label className="block text-gray-700">Release Status</label>
            <input
              type="text"
              {...register("releaseStatus", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.releaseStatus ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.releaseStatus && (
              <p className="text-red-500">Release Status is required</p>
            )}
          </div>

          {/* Poster URL */}
          <div>
            <label className="block text-gray-700">Poster URL</label>
            <input
              type="text"
              {...register("poster", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.poster ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.poster && (
              <p className="text-red-500">Poster URL is required</p>
            )}
          </div>

          {/* Genre */}
          <div>
            <label className="block text-gray-700">Genre</label>
            <input
              type="text"
              {...register("genre", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.genre ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.genre && <p className="text-red-500">Genre is required</p>}
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-700">Rating</label>
            <input
              type="text"
              {...register("rating", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.rating ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.rating && (
              <p className="text-red-500">Rating is required</p>
            )}
          </div>

          {/* Vote Count */}
          <div>
            <label className="block text-gray-700">Vote Count</label>
            <input
              type="text"
              {...register("voteCount", { required: true })}
              className={`w-full px-4 py-2 border ${
                errors.voteCount ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.voteCount && (
              <p className="text-red-500">Vote Count is required</p>
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

export default AddNewMovie;

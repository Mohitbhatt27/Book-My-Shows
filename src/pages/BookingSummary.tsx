import {
  FaClock,
  FaFilm,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaTicketAlt,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { AxiosInstance } from "../config/AxiosInstance";
import HomeLayout from "../layouts/HomeLayout";

function Bookings() {
  const { state } = useLocation();
  
  const booking = state?.booking?.data;
  const navigate = useNavigate();

  async function makePayment() {
    const response = await AxiosInstance.post(
      "/mba/api/v1/payments",
      {
        showId: state.showId,
        bookingId: state.booking.data._id,
        amount: state.booking.data.totalCost,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    if (response.data.success) {
      navigate("/");
    }
  }

  const { theatreId, movieId, timing, noOfSeats, totalCost } = booking;
  if (!booking) {
    return (
      <HomeLayout>
        <div className="text-center mt-10 text-lg text-gray-700">
          No booking information found.
        </div>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <div className="container mx-auto mt-10 px-6">
        <h1 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-gradient bg-gradient-to-r from-blue-500 to-purple-500 h-12">
          Booking Summary
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-xl transition-transform hover:scale-105">
          <div className="mb-6 flex items-center">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <span className="text-xl font-semibold text-gray-700 ml-3">
              Cinema:
            </span>
            <span className="ml-3 text-xl text-gray-600">{theatreId.name}</span>
          </div>

          <div className="mb-6 flex items-center">
            <FaFilm className="text-red-500 text-2xl" />
            <span className="text-xl font-semibold text-gray-700 ml-3">
              Movie:
            </span>
            <span className="ml-3 text-xl text-gray-600">{movieId.name}</span>
          </div>

          <div className="mb-6 flex items-center">
            <FaClock className="text-yellow-500 text-2xl" />
            <span className="text-xl font-semibold text-gray-700 ml-3">
              Timing:
            </span>
            <span className="ml-3 text-xl text-gray-600">{timing}</span>
          </div>

          <div className="mb-6 flex items-center">
            <FaTicketAlt className="text-indigo-500 text-2xl" />
            <span className="text-xl font-semibold text-gray-700 ml-3">
              Number of Seats:
            </span>
            <span className="ml-3 text-xl text-gray-600">{noOfSeats}</span>
          </div>

          <div className="mb-6 flex items-center">
            <FaRupeeSign className="text-green-600 text-2xl" />
            <span className="text-xl font-semibold text-gray-700 ml-3">
              Total Cost:
            </span>
            <span className="ml-3 text-xl text-gray-600">₹{totalCost}</span>
          </div>

          <div className="mt-8 text-center">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold rounded-lg hover:shadow-lg hover:opacity-90 transition-all"
              onClick={makePayment}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Bookings;

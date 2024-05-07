import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AxiosInstance } from "../config/AxiosInstance";
import HomeLayout from "../layouts/HomeLayout";
import processSeatConfig from "../utils/ProcessSeatConfig";

interface Seat {
  number: number;
  status: number;
}

interface Row {
  number: string;
  seats: Seat[];
}

interface SelectedSeat {
  rowNumber: string;
  seatNumber: number;
}

function SeatingChart() {
  const { state } = useLocation();

  const [seats, setSeats] = useState<Row[]>([
    {
      number: "",
      seats: [
        {
          number: 0,
          status: 0,
        },
      ],
    },
  ]);

  useEffect(() => {
    setSeats(processSeatConfig(state.config).rows);
  }, [state.config]);

  function onBooking() {
    const selectedSeats: SelectedSeat[] = [];

    seats.forEach((row: Row) => {
      row.seats.forEach((currentSeat: Seat) => {
        if (currentSeat.status == 3) {
          const currentlySelectedSeat: SelectedSeat = {
            rowNumber: row.number,
            seatNumber: currentSeat.number,
          };

          selectedSeats.push(currentlySelectedSeat);
        }
      });
    });

    const seatsJson = JSON.stringify(selectedSeats).replace(/"/g, "'");
    console.log("state,price", typeof state.price);
    AxiosInstance.post(
      "/mba/api/v1/bookings",
      {
        seat: seatsJson,
        movieId: state.movieId,
        theatreId: state.theatreId,
        noOfSeats: selectedSeats.length,
        timing: state.timing,
        price: state.price,
        showId: state.showId,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
  }

  function processSeatColor(seat: Seat) {
    if (seat.status == 0) return ""; // blocked
    else if (seat.status == 1)
      return "border border-green-300 hover:bg-[#1ea83c]"; // avaliable
    else if (seat.status == 3)
      return "border border-yellow-300 bg-[#1ea83c]"; // selected
    else return "border border-gray-400 bg-gray-300"; // reserved
  }

  function processSeatSelection(seatId: string) {
    const [rowNumber, seatNumber] = seatId.split("-");
    const updatedSeats = seats.map((row: Row) => {
      if (row.number != rowNumber) return row;
      else {
        const updatedRowSeats = row.seats.map((seat: Seat) => {
          if (seat.number != +seatNumber) return seat;
          else {
            seat.status = seat.status == 1 ? 3 : 1;
            return seat;
          }
        });
        row.seats = updatedRowSeats;
        return row;
      }
    });
    setSeats(updatedSeats);
  }

  return (
    <HomeLayout>
      <div className="bg-gray-200 h-12 w-[50%] m-4 flex  mx-auto items-center justify-center text-center transform rotateX-45 shadow-custom">
        <p className="text-2xl bold">SCREEN THIS WAY</p>
      </div>
      <div className="flex flex-col items-center justify-center p-16">
        {seats.map((row: Row) => {
          return (
            <div key={row.number} className="flex gap-8 items-center">
              <div>{row.number}</div>

              <div className="flex gap-2 my-2 mx-1">
                {row.seats.map((seat: Seat, idx: number) => {
                  return seat.status == 0 ? (
                    <div key={idx} className="h-[2rem] w-[2rem]"></div>
                  ) : (
                    <div
                      key={`${row.number}-${seat.number}`}
                      onClick={() => {
                        processSeatSelection(`${row.number}-${seat.number}`);
                      }}
                      className={`${processSeatColor(
                        seat
                      )} px-2 py-1 h-[2rem] w-[2rem] hover:cursor-pointer`}
                    >
                      {seat.number}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={onBooking}
            className="bg-red-500 px-4 py-2 text-white font-semibold hover:cursor-pointer hover:bg-red-400 mt-4 rounded-md"
          >
            Create Booking
          </button>
        </div>
      </div>
    </HomeLayout>
  );
}

export default SeatingChart;

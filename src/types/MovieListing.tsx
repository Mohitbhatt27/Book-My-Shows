/* eslint-disable react-refresh/only-export-components */
interface MovieShow {
  id: string; // show id
  timing: string;
  format: string;
  price: number;
  noOfSeats: number;
  seatConfiguration: string;
  theatreId: string;
  movieId: string;
}

interface TheatreShowData {
  theatreName: string;
  id: string; //theatre id
  shows: [MovieShow];
}
interface TheatreState {
  [key: string]: TheatreShowData;
}

interface show {
  createdAt: string;
  format: string;
  movieId: string;
  noOfSeats: number;
  price: number;
  timing: string;
  updatedAt: string;
  _v: number;
  _id: string;
  theatreId: theatre;
  seatConfiguration: string;
}

interface theatre {
  city: string;
  createdAt: string;
  updatedAt: string;
  movies: [string];
  name: string;
  owner: string;
  pincode: number;
  _v: number;
  _id: string;
}

export type { TheatreState, TheatreShowData, show, theatre };
interface TheatreData {
  _id: string;
  name: string;
  description?: string;
  city: string;
  pincode: number;
  address?: string;
  owner: string;
  movies: string[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export default TheatreData;

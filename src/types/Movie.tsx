interface Movie {
  _id?: string;
  name?: string;
  description?: string;
  casts?: string[];
  trailerUrl?: string;
  language?: string;
  releaseDate?: string;
  director?: string;
  releaseStatus?: string;
  poster?: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  genre?: string;
  rating?: string;
  voteCount?: string;
}

export default Movie;
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useApiMoviesArraySelector } from "../../store/selectors";
import Shorten from "../Shorten";

const MovieBanner = () => {
  const { movieId } = useParams();
  const apiMoviesArray = useApiMoviesArraySelector();
  const thisMovie = apiMoviesArray.map((movie) =>
    movie.find((movie) => movie.id == movieId)
  );

  return (
    <div className="movie-details__container">
      <img
        className="movie-details__image"
        src={thisMovie.map((m) => m.poster_path)}
        alt={thisMovie.map((m) => m.title)}
        onError={(e) =>
          (e.target.src =
            "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
        }
      />
      <div>
        <div className="flex">
          <Link to="/" className="exit-button">
            X
          </Link>
          <h2> {thisMovie.map((m) => m.title)}</h2>
          <span className="movie-details__rating">
            {" "}
            {thisMovie.map((m) => m.vote_average)}
          </span>
        </div>
        <p>{thisMovie.map((m) => m.tagline)}</p>
        <div className="flex movie-details__date-runtime">
          <p> {Shorten(thisMovie.map((m) => m.release_date))} </p>
          <p> {thisMovie.map((m) => m.runtime)} min</p>
        </div>
        <p>{thisMovie.map((m) => m.overview)}</p>
      </div>
    </div>
  );
};

export default MovieBanner;

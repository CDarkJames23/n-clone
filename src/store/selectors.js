import { useSelector } from "react-redux";

export const useMovieGenreFilterSelector = () =>
  useSelector((state) => state.filterMovie);

export const useMovieArraySearchSelector = () =>
  useSelector((state) => state.searchFilter);

export const useApiMoviesArraySelector = () =>
  useSelector((state) => state.movies);

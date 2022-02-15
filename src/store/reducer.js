import {
  SEARCH,
  MOVIE_FILTER,
  MOVIES_LOADED,
  MOVIE_REMOVED,
  MOVIE_ADDED,
  RESET,
  MOVIES_LOADED_BY_TITLE,
  MOVIES_LOADED_BY_DATE,
  MOVIES_LOADED_BY_RATING,
} from "./actionTypes";

const initialState = {
  movies: [],
  searchFilter: "",
  filterMovie: "",
  movieArray: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIES_LOADED:
    case MOVIES_LOADED_BY_TITLE:
    case MOVIES_LOADED_BY_DATE:
    case MOVIES_LOADED_BY_RATING:
      return {
        ...state,
        movies: [payload],
      };

    case RESET:
      return {
        ...state,
        movies: [[...state.movies[0], (payload = {})]],
      };

    case MOVIE_REMOVED:
      const moviesUpdated = state.movies[0].filter((movie) => {
        return movie.id !== payload;
      });

      return { ...state, movies: [moviesUpdated] };

    case MOVIE_ADDED:
      return {
        ...state,
        movies: [[...state.movies[0].unshift(payload)]],
      };
    case MOVIE_FILTER:
      return {
        ...state,
        filterMovie: payload,
      };

    case SEARCH:
      return {
        ...state,
        searchFilter: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

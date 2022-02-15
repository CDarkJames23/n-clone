import {
  MOVIES_LOADED,
  MOVIES_LOADED_BY_DATE,
  MOVIES_LOADED_BY_RATING,
  MOVIES_LOADED_BY_TITLE,
} from "./actionTypes";

const api = "http://localhost:4000/movies";

export const loadMoviesThunk = () => async (dispatch) => {
  const apiLink = `${api}?limit=100`;
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: MOVIES_LOADED,
    payload: moviesData.data,
  });
};

export const loadMoviesByTitleThunk = () => async (dispatch) => {
  const apiLink = `${api}?sortOrder=desc&sortBy=title`;
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: MOVIES_LOADED_BY_TITLE,
    payload: moviesData.data,
  });
};

export const loadMoviesByRatingThunk = () => async (dispatch) => {
  const apiLink = `${api}?sortOrder=desc&sortBy=vote_average`;
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: MOVIES_LOADED_BY_RATING,
    payload: moviesData.data,
  });
};

export const loadMoviesByDateThunk = () => async (dispatch) => {
  const apiLink = `${api}?sortOrder=desc&sortBy=release_date`;
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: MOVIES_LOADED_BY_DATE,
    payload: moviesData.data,
  });
};

// export const loadFilteredMoviesThunk = () => async (dispatch) => {
//   const apiLink = `${api}?filter=${filter}`;
//   const apiData = await fetch(apiLink);
//   const moviesData = await apiData.json();
//   dispatch({
//     type: MOVIES_LOADED,
//     payload: moviesData.data,
//   });
// };

// export const searchMoviesThunk = () => async (dispatch) => {
//   const apiLink = `${api}?search=${parameter}&searchBy=title`;

//   const apiData = await fetch(apiLink);
//   const moviesData = await apiData.json();
//   dispatch({
//     type: MOVIES_LOADED_BY_DATE,
//     payload: moviesData.data,
//   });
// };

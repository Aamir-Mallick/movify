import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: "FETCH_RQUEST",
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};

export const fetchUserFailed = (error) => {
  return {
    type: "FETCH_FAILED",
    payload: error,
  };
};

export const fetchMovies = (input) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=73ae9f23a6c524ec2743e2a1fc6076e6&language=en-US&query=${input}&page=1&include_adult=false`
    )
      .then((res) => {
        const movieList = res.data.results;
        dispatch(fetchUserSuccess(movieList));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUserFailed(errorMessage));
      });
  };
};

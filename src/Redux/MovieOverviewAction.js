import axios from "axios";
const getOverviews = (overView) => {
  return {
    type: "OVER_VIEW",
    payload: overView,
  };
};

export const movieOverViewData = (movieId) => {
  return (dispatch) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=73ae9f23a6c524ec2743e2a1fc6076e6&language=en-US`
    ).then((res) => {
      console.log(res.data);

      dispatch(getOverviews(res.data));
    });
  };
};

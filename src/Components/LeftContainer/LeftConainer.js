import React from "react";
import "./LeftContainerStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { movieOverViewData } from "../../Redux/MovieOverviewAction";

function LeftConainer() {
  let url = "https://image.tmdb.org/t/p/w500";
  const data = useSelector((state) => {
    return state.DataRedcer;
  });

  const dispatch = useDispatch();
  const getMovieOverview = (id) => {
    dispatch(movieOverViewData(id));
  };

  return (
    <div className="left__container">
      {data.loading ? (
        <p>loading..</p>
      ) : data.error ? (
        <h1>{data.error}</h1>
      ) : data.data.length === 0 && data.loading === false ? (
        <h1>search movies now </h1>
      ) : (
        data.data.map((items) => {
          return (
            <div className="movies__list__conatiner" key={items.id}>
              <p>{items.title}</p>
              <div>
                <img
                  id
                  src={url + items.poster_path}
                  width="200px"
                  height="100px"
                />
              </div>
              <p>release Date: {items.release_date}</p>
              <button
                onClick={() => {
                  getMovieOverview(items.id);
                }}
                id="overViewsBtn"
              >
                Overview
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default LeftConainer;

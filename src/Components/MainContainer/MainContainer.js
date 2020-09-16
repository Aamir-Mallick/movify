import React from "react";
import "./MainContainerStyles.css";
import { useSelector } from "react-redux";

function MainContainer() {
  const data = useSelector((state) => {
    return state.movieReducer;
  });

  return (
    <div className="mainContainer__container">
      <p>{data.overView.original_title}</p>
      <p>{data.overView.overview}</p>
    </div>
  );
}

export default MainContainer;

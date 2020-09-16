import React, { useState } from "react";
import "./NavbarStyles.css";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../Redux/Action";

function Navbar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const clickHandler = () => {
    if (input) {
      dispatch(fetchMovies(input));
    } else {
      swal("field should not be empty", "error");
    }
  };

  return (
    <div className="navbar__container">
      <div className="navbar__search__container">
        <input
          id="search-input"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="search movies here"
        />

        <button onClick={clickHandler} id="search-btn">
          search
        </button>
      </div>
    </div>
  );
}

export default Navbar;

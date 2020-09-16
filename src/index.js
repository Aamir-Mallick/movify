import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import DataRedcer from "./Redux/Reducer";
import thunk from "redux-thunk";
import movieReducer from "./Redux/MovieOverviewReducer";

const mainReducer = combineReducers({
  DataRedcer: DataRedcer,
  movieReducer: movieReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

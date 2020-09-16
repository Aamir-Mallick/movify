import { fetchUserRequest, fetchUserFailed, fetchUserSuccess } from "./Action";
const initialState = {
  data: [],
  loading: false,
  error: "",
};

const DataRedcer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RQUEST":
      return {
        ...state,
        loading: true,
        data: [],
        error: "",
      };

    case "FETCH_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_FAILED":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default DataRedcer;

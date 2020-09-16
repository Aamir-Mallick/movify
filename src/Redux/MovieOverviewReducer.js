const initialState = {
  overView: "click for overView",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OVER_VIEW":
      return {
        ...state,
        overView: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default movieReducer;

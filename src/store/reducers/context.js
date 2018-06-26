const initialState = {
  count: 0,
  max: 0,
};

const context = (state = initialState, {type}) => {
  switch (type) {
    case "INCREASE": {
      const count = state.count + 1;

      return {
        ...state,
        count,
        max: count > state.max ? count : state.max,
      };
    }
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default context;

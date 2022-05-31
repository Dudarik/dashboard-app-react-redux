import { ADD_POSITIONS } from "./positions-actions";

const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS:
      return action.positions;

    default:
      return state;
  }
};

export { positionReducer };

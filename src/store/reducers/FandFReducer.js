import { GET_ALL_RELATIVES } from "../actions/ActionType";

const intitialState = {
  Relatives: [],
};

const FandFReducer = (state = intitialState, action) => {
  console.log("action", action);
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_RELATIVES:
      return {
        ...state,
        Relatives: action.Relatives,
      };

    default:
      return state;
  }
};

export default FandFReducer;

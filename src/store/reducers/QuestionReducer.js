import { GET_ALL_CATEGORIES } from "../actions/ActionType";

const intitialState = {
  Categories: [],
};

const QuestionReducer = (state = intitialState, action) => {
  console.log("action", action);
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        Categories: action.Categories,
      };

    default:
      return state;
  }
};

export default QuestionReducer;

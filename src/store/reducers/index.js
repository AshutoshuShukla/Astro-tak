import { combineReducers } from "redux";
import FandFReducer from "./FandFReducer";
import QuestionReducer from "./QuestionReducer";
const rootReducer = combineReducers({
  QuestionReducer,
  FandFReducer,
});

export default rootReducer;

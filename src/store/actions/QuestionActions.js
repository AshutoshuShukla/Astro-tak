import { GET_ALL_CATEGORIES } from "../../store/actions/ActionType";
import { getAllCategories } from "../../Servicers/QuestionService";

//FOR TODO
export const retriveAllCategories = (Categories) => {
  return {
    type: GET_ALL_CATEGORIES,
    Categories,
  };
};

export const retriveAllCategoriesInfo = (dispatch) => {
  const result = getAllCategories();
  result.then((response) => {
    dispatch(retriveAllCategories(response));
  });
};

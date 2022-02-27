import { getAllRelatives } from "../../Servicers/FandFServices";
import { GET_ALL_RELATIVES } from "./ActionType";
//FOR TODO
export const retriveAllRelatives = (Relatives) => {
  return {
    type: GET_ALL_RELATIVES,
    Relatives,
  };
};

export const retriveAllRelativesInfo = (dispatch) => {
  const result = getAllRelatives();
  result.then((response) => {
    dispatch(retriveAllRelatives(response));
  });
};

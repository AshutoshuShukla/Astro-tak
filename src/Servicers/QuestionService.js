import axios from "axios";

export async function getAllCategories() {
  return await axios
    .get("https://staging-api.astrotak.com/api/question/category/all")
    .then((response) => {
      console.log("response from API", response);
      return response.data.data;
    })
    .catch((error) => {
      console.log("Error", error.toJSON());
      return error.toJSON();
    });
}

export async function getAllUsers() {
  return await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log("Error", error.toJSON());
      return error.toJSON();
    });
}

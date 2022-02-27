import axios from "axios";
const access_token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4ODA5NzY1MTkxIiwiUm9sZXMiOltdLCJleHAiOjE2NzY0NjE0NzEsImlhdCI6MTY0NDkyNTQ3MX0EVAhZLNeuKd7e7BsW5lYEtggbSfLD_aKqGFLpidgL7UHZTBues0MUQR8sqMD1267V4Y_VheBHpxwKWKA3lQ";

// axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

export async function getAllRelatives() {
  return await axios
    .get("https://staging-api.astrotak.com/api/relative/all", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => {
      console.log("response from API", response);
      return response;
    })
    .catch((error) => {
      console.log("Error", error.toJSON());
      return error.toJSON();
    });
}

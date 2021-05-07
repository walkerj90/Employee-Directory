import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20";

export default {
  search: async function () {
    let response = await axios
      .get(BASEURL)
      .then((x) => x)
      .catch((err) => console.log("error: ", err));
    console.log("API.search() called", response);
    return response;
  },
};

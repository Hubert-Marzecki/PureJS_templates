import swal from "sweetalert";
const axios = require('axios')


export default async function sendPost  (API_URL, postData) {
  try {
    const res = await axios.post(API_URL, postData);
    console.log(res.data)
  } catch (err) {
    console.error(err);
    swal("Oops!", "Login inputs are invalid", "error");
  }
}
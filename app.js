import { route } from './router';
import "./styles/style.scss";
const axios = require('axios')
import swal from 'sweetalert';
import landing from "./templates/landing";
import loggedIn from "./templates/loggedIn";
import initTemplates from "./templates/initTemplates";
import sendPost from "./client/post";


initTemplates();
var userName;

route('/', 'home', function() {
  this.username = "";
  this.password = "";

  this.$on('.username__input', 'change', (e) => {
    this.username = e.target.value;
    userName = e.target.value;
    this.$refresh();
  });

  this.$on('.password__input', 'change', (e) => {
    this.password = e.target.value;
    this.$refresh();
  });


    this.$on('.form__button--login', 'click', (e) => {
    const postData = {
      username: this.username,
      password: this.password
    }
    const API_URL = "https://zwzt-zadanie.netlify.app/api/login";


    if(postData.password === "") {
      swal("Oops!", "Input Password", "warning");
    } else if(postData.username === "") {
      swal("Oops!", "Input Username", "warning");
    } else {
      axios.post(API_URL, postData)
      .then((res) => {
          console.log("RESPONSE RECEIVED: ", res)
          window.location.replace("#/loggedin")
      })
      .catch((err) => {
        swal("Oops!", "Invalid password", "error");
        console.log("AXIOS ERROR: ", err);
      })
    }

   
  })
});

route('/loggedin', 'success', function() {
  this.username = userName;
  console.log(userName)
});

route('/ex2', 'example2', function() {
  this.title = 'Example 2';
  this.counter = 0;

  this.$on('.my-button', 'click', () => {
    this.counter += 1;
    this.$refresh();
  });
});

route('*', '404', function () {});

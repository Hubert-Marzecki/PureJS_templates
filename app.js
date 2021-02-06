import { route } from "./router";
import "./styles/style.scss";
import swal from "sweetalert";
import initTemplates from "./templates/initTemplates";
import apiPost from './client/post';

initTemplates();

route("/", "home", function () {
  this.username = "";
  this.password = "";

  this.$on(".username__input", "change", (e) => {
    this.username = e.target.value;
  });

  this.$on(".password__input", "change", (e) => {
    this.password = e.target.value;
  });

  this.$on(".form__button--login", "click", (e) => {
    e.preventDefault();
    const loginFormInputs = {
      username: this.username,
      password: this.password,
    };
    
    if (loginFormInputs.password === "" && loginFormInputs.username === "") {
      swal("Oops!", "Please enter login & password", "warning");
    } else if (loginFormInputs.username === "") {
      swal("Oops!", "Please enter username", "warning");
    } else if (loginFormInputs.password === "") {
      swal("Oops!", "Please enter password", "warning");
    } else {
      apiPost("login", loginFormInputs)
      .then(data => {
        console.log(data)
        if(data.error){
          swal("Oops!", data.message, "error");
        } else {
          localStorage.setItem('userToken', data.token);
          window.location = "#/loggedin"
        }
      }) 
      .catch((err) => {
        swal("Oops!", "Something went wrong, please try again later", "error");
        console.error( err);
      });

    }
  });
});

route("/loggedin", "success", function () {
  
  this.$on(".logout__button", "click", (e) => {
  e.preventDefault();
  localStorage.removeItem("userToken");
  window.location = "#/"
});

}


route("*", "404", function () {});

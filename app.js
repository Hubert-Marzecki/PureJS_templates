import { route } from "./router";
import "./styles/style.scss";
import swal from "sweetalert";
import initTemplates from "./templates/initTemplates";
import apiPost from './client/post';
import {validate, notEmpty, showValidationErrorsAlert} from './utils/validations';


initTemplates();

route("/", "home", function () {
  this.username = "";
  this.password = "";

  const loginHandler = (e) =>  {
    e.preventDefault();
    const loginFormInputs = {
      username: this.username,
      password: this.password,
    };
    const fieldValidations  = {
      username: [notEmpty],
      password: [notEmpty],
    }
    const validationErrors = validate(fieldValidations, loginFormInputs)
    if(validationErrors.length){
      showValidationErrorsAlert(validationErrors)
    } else {
      apiPost("login", loginFormInputs)
      .then(data => {
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
  }

  this.$on(".username__input", "change", (e) => {
    const insertedUsername = e.target.value
    this.username = insertedUsername.replace(/\s/g, "");
    e.target.classList.remove("input--missing")
    console.log(this.username)
  });

  this.$on(".password__input", "change", (e) => {
    this.password = e.target.value;
    e.target.classList.remove("input--missing");
  });

  this.$on(".password__input", "keyup", (e) => {
      if(e.keyCode === 13 ) {
        loginHandler(e);
      }
  });

  this.$on(".form__button--login", "click", (e) => {
      loginHandler(e);
});


route("/loggedin", "success", function () {
  this.$on(".logout__button", "click", (e) => {
  e.preventDefault();
  localStorage.removeItem("userToken");
  window.location = "#/";
});
})
});


route("*", "404", function () {});

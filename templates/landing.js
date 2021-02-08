import templateCreator from './templateCreator';

export default function landing() {
    const HTML = `
  <div class="landing__page">
  <div class="form__container">
    <div class="login__panel">
      <div class="panel__header">
       <h1 class="header"> APLIKACINIO </h1>
      </div>
      <div class="social__login">
          <div class="icon__wrapper">
          <a href="#">
          <img  class="icon" src="../assets/facebook.png" alt="facebook icon. Icon created by Freepik https://www.flaticon.com/authors/freepik">
          </a>
          </div>
          <div class="icon__wrapper">
          <a href="#">
          <img  class="icon" src="../assets/instagram_2.png"  alt="instagram icon. Icon created by Freepik https://www.flaticon.com/authors/freepik" >
          </a>
        </div>
        <div class="icon__wrapper">
        <a href="#">
        <img  class="icon" src="../assets/google.png" alt="google icon. Icon created by Freepik https://www.flaticon.com/authors/freepik">
        </a>
        </div>
      </div>
      <div class="form__wrapper">
        <form class="login__form">
          <input class="input username__input" type="text"  placeholder="Username"  value=<%= username %>> <br>
          <input class="input password__input" type="password" placeholder="Password" value=<%= password %>> <br>
          <a class="password__revival">Forgot Password?</a>
          <div class="buttons__wrapper">
            <button class="form__button form__button--login" value="Login"  type="button"> Login </button>
            <button class="form__button form__button--register " type="button" > Register </button>
          </div>

        </form>
      </div>
    </div>
    <div class="img__wrapper">
      <img class="img" src="./assets/astronaut.png" alt="">
      <!-- //https://jsweisart.com/facebook-alegria-->
    </div>
  </div>
</div>
  `;
    templateCreator("home", HTML);
}


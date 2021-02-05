import templateCreator from './templateCreator';

export default function landing() {
    const HTML = `
  <div class="landing__page">
  <div class="form__container">
    <div class="login__panel">
      <div class="panel__header">
        Company name
        <!--   IMG   -->
      </div>

      <div class="social__login">
          <div>
            FB
          </div>
        <div>
          GG
        </div>
        <div>
          TWI
        </div>
      </div>
      <div class="form__wrapper">
        <form class="login__form">
          <input class="input username__input" type="text"  placeholder="Username"     value=<%= username %>> <br>
          <input class="input password__input" type="password" placeholder="Password"    value=<%= password %>> <br>
          <a class="password__revival">Forget Password?</a>
          <div class="buttons__wrapper">
<!--            type="submit" value="Register"-->
            <button class="form__button form__button--login" value="Login"  type="button"> Login </button>
            <input class="form__button" type="submit" value="Register">
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


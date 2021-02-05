import templateCreator from "./templateCreator";

export default function loggedIn() {
    const HTML = `
     <div class="logged__in__page">
        <div class="container">
          <div class="content__wrapper">
            <h1 class="header">
              Welcome!
            </h1>
            <p class="prod__info">
              Now you have access to <span>Hubert Marzecki skills! </span>
            </p>
            <div class="feature__container">
              <div class="feature__tile">
             <div class="tile__img__wrapper">
                   <img  class="img" src="../assets/astronaut.png">
                </div>
                <h5 class="tile__header">Creative thinker</h5>
                <p class="tile__text">
                 I like to look out for most stunning and effective solution.
                </p>
              </div>
              <div class="feature__tile">
             <div class="tile__img__wrapper">
                   <img  class="img" src="../assets/astronaut.png">
                </div>
                <h5 class="tile__header">"Can do" man </h5>
                <p class="tile__text">
                 I am able to create everything... in appropriate amount of time and Megabytes!
                </p>
              </div>
              <div class="feature__tile">
                <div class="tile__img__wrapper">
                <img  class="img" src="../assets/astronaut.png">
                </div>
                <h5 class="tile__header">Team player</h5>
                <p class="tile__text">
                  At this point I will learn from the best, one day I will learn someone else!
                </p>
              </div>
            </div>
          </div>

        </div>
    </div>
    `
    templateCreator("success", HTML);
}
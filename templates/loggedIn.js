import templateCreator from "./templateCreator";

export default function loggedIn() {
    const HTML = `
     <div class="logged__in__page">
     <div class="logout__holder">
      <button class="logout__button"> Logout </button>     
     </div>

   
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
      
                   <img  class="img" src="../assets/shipping.png" alt="Icon created by Freepik https://www.flaticon.com/authors/freepik " >
                </div>
                <h5 class="tile__header">Creative thinker</h5>
                <p class="tile__text">
                 I like to look out for most stunning and effective solution. Most of the time it pays out.
                </p>
              </div>
              <div class="feature__tile">
             <div class="tile__img__wrapper">
          
                   <img  class="img" src="../assets/rating.png" alt="Icon created by Freepik https://www.flaticon.com/authors/freepik " >
                </div>
                <h5 class="tile__header">"Can do" man </h5>
                <p class="tile__text">
                 I am able to create everything... in appropriate amount of time and Megabytes in my router or phone !
                </p>
              </div>
              <div class="feature__tile">
                <div class="tile__img__wrapper">
             
                <img  class="img" src="../assets/chat.png" alt="Icon created by Freepik https://www.flaticon.com/authors/freepik " >
                </div>
                <h5 class="tile__header">Team player</h5>
                <p class="tile__text">
                  At this point I will learn from the best, and one day I will return that favour learning someone else.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    `
    templateCreator("success", HTML);
}
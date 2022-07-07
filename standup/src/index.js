import { data } from "./data.js";
import { global, shuffle, toggleName, setBackground } from "./utils.js";

const mainList = data;
console.clear();

const app = document.getElementById("app");
app.innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const urlParams = new URLSearchParams(window.location.search);
let qsTeam = urlParams.get(`team`);
if (qsTeam) {
  qsTeam = qsTeam.toLowerCase();
} else {
  qsTeam = `support`;
}

if (qsTeam) {
  const initialize = () => {
    let appContent = {
      menu: ``,
      team: ``,
      heroes: ``
    };
    const heroes = mainList.heroes;
    const leagues = mainList.leagues;
    let heroNames = [];

    appContent.menu += `<a id="backgroundChooser" href="javascript:void(0);">Background</a>`;

    leagues.forEach((league) => {
      const leagueNameLC = league.name.toLowerCase();
      // MENU
      appContent.menu += `
        <a
          href="?team=${leagueNameLC}"
          class="${leagueNameLC === qsTeam ? "selected" : ""}">
          ${league.name}
        </a>`;

      if (leagueNameLC === qsTeam) {
        // perma-set daily hero list
        heroNames = [];
        heroes.forEach((hero) => {
          if (hero.leagues.includes(league.name)) {
            heroNames.push(hero.name);
          }
        });
        heroNames = shuffle(heroNames);

        // TEAM
        appContent.team = `<h2>${league.name}</h2>`;

        // HEROES
        heroNames.forEach((shHero) => {
          const thisHero = heroes.find((h) => h.name === shHero);
          if (thisHero.leagues.includes(league.name)) {
            appContent.heroes += `
            <a href="javascript:void(0);" class="member area${thisHero.area}">
              ${thisHero.name}
            </a>`;
          }
        });
      }
    });

    app.innerHTML = `
    <div class="dds__container">
      <div class="dds__row">
        <div class="menu dds__col--12 dds__col--sm-12 dds__col--md-12 dds__mb-3">
          ${appContent.menu}
        </div>
      </div>
      <div class="dds__row">
        <div class="team dds__col--12 dds__col--sm-12 dds__col--md-12 dds__mb-3">
          ${appContent.team}
        </div>
      </div>
      <div class="dds__row">
        <div class="heroes dds__col--12 dds__col--sm-12 dds__col--md-12 dds__mb-3">
          ${appContent.heroes}
        </div>
      </div>
    </div>
  `;

    // ADD EVENTS
    document
      .getElementById(`backgroundChooser`)
      .addEventListener(`click`, (e) => {
        global.prefs.background = prompt("New Background");
        if (global.prefs.background) {
          setBackground(global.prefs.background);
        }
      });
    document.querySelectorAll(`.member`).forEach((m) => {
      m.addEventListener(`click`, toggleName);
    });
  };

  const backgrounds = [
      `https://media.giphy.com/media/CKlafeh1NAxz35KTq4/giphy-downsized-large.gif`,
      `https://media.giphy.com/media/26u43GwxpIiUgrHI4/giphy.gif`,
      `https://media.giphy.com/media/l1J3E6f7RJSm97wZy/giphy.gif`,
      `https://media.giphy.com/media/Ny6tc0CUS0CmQ/giphy.gif`,
      `https://media.giphy.com/media/J6DQHT6q58A66kfFxb/giphy.gif`,
      `https://media.giphy.com/media/l41Yx9tEWUwyEsy8E/giphy.gif`,
      `https://media.giphy.com/media/8lGQNlZqYBP86D4Cep/giphy.gif`,
      `https://media.giphy.com/media/1gdr0AVrek4Q1fOs3Z/giphy-downsized-large.gif`,
      `https://media.giphy.com/media/YNYSyuGCHT7he/giphy.gif`,
  ];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  setBackground(randomBackground);
  initialize();
}

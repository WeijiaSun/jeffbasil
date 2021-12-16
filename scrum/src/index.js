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

  // global.prefs.pivotal.token = prompt(`Pivotal Token:`);
  setBackground(`https://media.giphy.com/media/3f63VcWeaGeaQ6AfKk/giphy.gif`);
  initialize();
  // pivotal.getMe();
  // https://media.giphy.com/media/3f63VcWeaGeaQ6AfKk/giphy.gif
}

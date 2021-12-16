export const global = {
  prefs: {
    pivotal: {}
  },
  states: {}
};

export const shuffle = (array) => {
  var date = new Date();
  var dateString =
    "" + date.getFullYear() + date.getMonth() + date.getDate() + "1";
  var p = new Math.seedrandom(dateString);

  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(p() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const toggleName = (e) => {
  if (e.target.classList.contains("memberToggled")) {
    e.target.classList.remove("memberToggled");
  } else {
    e.target.classList.add("memberToggled");
  }
};

export const setBackground = (newBkg) => {
  const body = document.getElementsByTagName("body")[0];
  if (newBkg.indexOf("http") === -1) {
    body.style.backgroundImage = newBkg;
  } else {
    body.style.backgroundImage = "url(" + newBkg + ")";
  }
};

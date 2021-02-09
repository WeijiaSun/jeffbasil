export function createMember(member) {
    fetch("/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(member)
    }).then(
      alert('posted')
    );
  }

 export function shuffle(array) {

    var date = new Date();
    var dateString = "" + date.getFullYear() + date.getMonth() + date.getDate() + "1";
    var p = new Math.seedrandom(dateString);

    var currentIndex = array.length, temporaryValue, randomIndex;

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
}
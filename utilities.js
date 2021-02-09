export const data = {
    "members": [
      { "tags": [ "PM" ], "nameLast": "B", "nameFirst": "Marcelo", "id": 0 },
          { "tags": [ "DV" ], "nameLast": "B", "nameFirst": "Catherine", "id": 1 },
          { "tags": [ "DV" ], "nameLast": "C", "nameFirst": "Alexandre", "id": 2 },
          { "tags": [ "DV" ], "nameLast": "C", "nameFirst": "Irene", "id": 3 },
          { "tags": [ "DV" ], "nameLast": "C", "nameFirst": "Mauricio", "id": 4 },
          { "tags": [ "DV" ], "nameLast": "D", "nameFirst": "Jared", "id": 5 },
          { "tags": [ "DV" ], "nameLast": "D", "nameFirst": "Felipe", "id": 6 },
          { "tags": [ "DV" ], "nameLast": "E", "nameFirst": "Isaac", "id": 7 },
          { "tags": [ "DV" ], "nameLast": "G", "nameFirst": "Jeferson", "id": 8 },
          { "tags": [ "DV" ], "nameLast": "L", "nameFirst": "Alice", "id": 9 },
          { "tags": [ "DV" ], "nameLast": "M", "nameFirst": "Laura", "id": 10 },
          { "tags": [ "DV" ], "nameLast": "M", "nameFirst": "Bonnie", "id": 11 },
          { "tags": [ "DV" ], "nameLast": "M", "nameFirst": "Keilla", "id": 12 },
          { "tags": [ "DV" ], "nameLast": "O", "nameFirst": "Chris", "id": 13 },
          { "tags": [ "DV" ], "nameLast": "O", "nameFirst": "Dan", "id": 14 },
          { "tags": [ "PM" ], "nameLast": "S", "nameFirst": "Philip", "id": 15 },
          { "tags": [ "DV" ], "nameLast": "S", "nameFirst": "Filipe", "id": 16 },
          { "tags": [ "PM" ], "nameLast": "S", "nameFirst": "Lisa", "id": 17 },
          { "tags": [ "DV" ], "nameLast": "S", "nameFirst": "Nathan", "id": 18 },
          { "tags": [ "DV" ], "nameLast": "S", "nameFirst": "Weijia", "id": 19 },
          { "tags": [ "DV" ], "nameLast": "T", "nameFirst": "Julio", "id": 20 },
          { "tags": [ "DS" ], "nameLast": "B", "nameFirst": "Josh", "id": 21 },
          { "tags": [ "DS" ], "nameLast": "B", "nameFirst": "Felipe", "id": 22 },
          { "tags": [ "DS" ], "nameLast": "B", "nameFirst": "Aury", "id": 23 },
          { "tags": [ "DS" ], "nameLast": "D", "nameFirst": "Michael", "id": 24 },
          { "tags": [ "DS" ], "nameLast": "G", "nameFirst": "Nancy", "id": 25 },
          { "tags": [ "DS" ], "nameLast": "L", "nameFirst": "Leslie", "id": 26 },
          { "tags": [ "DS" ], "nameLast": "L", "nameFirst": "Drieli", "id": 27 },
          { "tags": [ "DS" ], "nameLast": "M", "nameFirst": "Alexandre", "id": 28 },
          { "tags": [ "DS" ], "nameLast": "R", "nameFirst": "Leonardo", "id": 29 },
          { "tags": [ "DS" ], "nameLast": "S", "nameFirst": "Bianca", "id": 30 },
          { "tags": [ "DS" ], "nameLast": "S", "nameFirst": "Vasken", "id": 31 },
          { "tags": [ "DS" ], "nameLast": "S", "nameFirst": "Luisa", "id": 32 },
          { "tags": [ "DS" ], "nameLast": "V", "nameFirst": "Roy", "id": 33 },
          { "tags": [ "DS" ], "nameLast": "V", "nameFirst": "Nina", "id": 34 },
          { "tags": [ "DS" ], "nameLast": "W", "nameFirst": "Rachel", "id": 35 }
    ],
    "teams": [
        { "id": 0, "name": "DLS 1.0", "nick": "Trexes", "members": [ 27, 30, 28, 22, 31, 15, 2, 16, 4, 6, 36, 35, 25 ] },
        { "id": 1, "name": "DLS 2.0", "nick": "Stegos", "members": [ 18, 9, 1, 19, 2, 17, 33, 22, 29, 24, 34, 30, 28, 23, 32, 35, 25 ] },
        { "id": 2, "name": "DLS 2.0 - Data Vis", "nick": "Pteros", "members": [ 7, 20, 11, 14, 15, 34, 23, 35, 25 ] },
        { "id": 3, "name": "DLS 2.0 - website", "nick": "Raptors", "members": [ 12, 8, 10, 31, 33, 27, 32, 26, 29, 30, 23, 24, 3, 35, 25 ] }
        { "id": 3, "name": "DLS 2.0 - Communications", "nick": "Diplos", "members": [ 12, 8, 10, 34, 33, 23, 27, 28, 32, 22, 0, 35, 25 ] }
    ]
  };
  
export function createMember(member) {
    let result = fetch("/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(member)
    }).then((response) => {
        alert('response in console');
        console.log(response);
    }).catch((e) => {
        console.log(e);
    });
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
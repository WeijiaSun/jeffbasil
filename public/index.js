import { createMember, shuffle } from './utilities.js';

const json = require('../data.json')

const urlParams = new URLSearchParams(window.location.search);
let teamId = urlParams.get('team');
if (teamId) {
    teamId = Number(teamId);
} else {
    teamId = 0;
}
let teamList,
    selectedTeam,
    memberList,
    memberListForSelectedTeam = [];

teamList = json;
for (var i = 0; i < json.length; i++) {
    appendTeamLink(json, i);
}
listNames();

function appendTeamLink(json, i) {
    var thisTeam = json[i];
    var node = document.createElement("LI");  
    var nLink = document.createElement("a", {
        "id": "team_" + thisTeam.id
    });

    if (thisTeam.id === teamId) {
        nLink.classList.add('selectedTeam');
    }
    nLink.setAttribute("href", "?team=" + thisTeam.id);
    nLink.textContent = thisTeam.name;
    node.appendChild(nLink);
    document.getElementById("mainNav").appendChild(node);

}

function toggleName(e) {
    if (e.target.classList.contains("memberToggled")) {
        e.target.classList.remove("memberToggled");
    } else {
        e.target.classList.add("memberToggled");
    }
}

function listNames() {
    var randomizedList;
    if (teamId != null && teamList) {
        selectedTeam = teamList[teamId];
        randomizedList = shuffle(selectedTeam.members);

        fetch("/members/")
        .then(response => response.json())
        .then(json => {
            memberList = json;
            for (var i = 0; i < randomizedList.length; i++) {
                var thisMemberData,
                    mainEl = document.getElementById("main");
                    thisMemberData = memberList.find(x => x.id === randomizedList[i]);
                
                memberListForSelectedTeam.push(thisMemberData);
                var memberElement = document.createElement("a", {"id": "member" + thisMemberData.id});
                memberElement.setAttribute("href", "javascript:void(0)");
                memberElement.onclick = (e) => {
                    toggleName(e);
                };
                memberElement.className = "member";
                memberElement.textContent = thisMemberData.nameFirst + thisMemberData.nameLast.substr(0, 1);
                mainEl.appendChild(memberElement);
            }
        });

        

    }
}

[].forEach.call(document.querySelectorAll('[data-toggle="dds__modal"]'), function(element) {
    new UIC.Modal(element, {
        backdrop: 'static'
    });
});


window.onload = function () {
    var changeBackgroundInput = document.getElementById('changeBackground');
    var body = document.getElementsByTagName('body')[0];
    var existingBackground = getComputedStyle(body,'').getPropertyValue('background-image')
        .replace('url("', '')
        .replace('")', '');
    changeBackgroundInput.value = existingBackground;

    document.getElementById('saveBackgroundButton').onclick = (e) => {
        if (changeBackgroundInput.value.indexOf('http') > 0) {
            body.style.backgroundImage = changeBackgroundInput.value;
        } else {
            body.style.backgroundImage = 'url(' + changeBackgroundInput.value + ')';
        }
    };

}

document.getElementById('createMemberButton').onclick = () => {
    let cForm = document.getElementById('createUpdate');
    let newMember = {
        nameFirst: cForm.querySelector('[name="nameFirst"]').value,
        nameLast: cForm.querySelector('[name="nameLast"]').value
    }
    createMember(newMember);
}
console.log("halló")
var myDiv = document.querySelector(".container")

//Hérna koma input reitirnir til að fylla inn í  -----------------------
var form = document.querySelector(".form")
form.innerHTML = `
<div id="form">
    <ul class="list">
        <label>Nafn: </label><input id="name" type="text" />
        <label>Starfstitill: </label><input id="description" type="text" />
        <label>Email: </label><input id="clicks" type="text" />
        <label>Sími: </label><input id="status" type="text" />
        <label>Mynda-url: </label><input id="pic" type="text" />
        <button class="button">Bæta við korti</button>
    </ul>
</div>
`
//Hérna koma forsendurnar fyrir spjaldið
var button = document.querySelector(".button");
var list = document.querySelector(".list");
var title = document.querySelector("#name");
var picture = document.querySelector("#pic");
var clicks = document.querySelector("#clicks");
var status = document.querySelector("#status");
var description = document.querySelector("#description");

var addCard = function(e){

    //Hérna kemur spjaldið sem á að búa til 
    var getStarfsmann = function(title, about, clicks, available, photos){
    var starfsmannaCard = `
    <div>
        <h2>${title}</h2>
        <p class="about">Starfstitill: ${about}</p>
        <p class="clicks">Email: ${clicks}</p>
        <p class="avalible">Sími: ${available}</p>
        <img width="650px" height ="350px" src="${photos}">
    </div>
    `
    return starfsmannaCard;
    }
    myDiv.innerHTML += getStarfsmann(title.value, description.value, clicks.value, status.value, picture.value,);
}

button.onclick = addCard;

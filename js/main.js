console.log("halló")
var myDiv = document.querySelector(".container")

//Hérna koma input reitirnir -----------------------
var form = document.querySelector(".form")
form.innerHTML = `
<div id="form">
    <ul class="list">
        <label>Name: </label><input id="name" type="text" />
        <label>Description: </label><input id="description" type="text" />
        <label>Clicks: </label><input id="clicks" type="text" />
        <label>Status: </label><input id="status" type="text" />
        <label>Picture url: </label><input id="pic" type="text" />
        <button class="button">ADD CARD</button>
    </ul>
</div>
`

//Hérna fyrir neðan kemur CARD-ið---------------------------------------------
var names = ["Bjarni", "Jón Oddur", "Guttormur", "Brjánn", "Arrey"];
var about = [ "Big tempered, tall, friendly", "Sweet, shaved, young", "Shaved, silverfox, giving", "Short, adorable, a loner", "Goal oriented, abitious, optimistic",];
var photos = [
    "https://secure.i.telegraph.co.uk/multimedia/archive/03571/potd-squirrel_3571152k.jpg",
    "http://static.boredpanda.com/blog/wp-content/uploads/2016/03/i-photographed-wild-red-squirrels-celebrating-easter__880.jpg",
    "https://secure.i.telegraph.co.uk/multimedia/archive/03600/potd-squirrels_3600130k.jpg",
    "https://us.123rf.com/450wm/geertweggen/geertweggen1706/geertweggen170600392/79866688-close-up-of-red-squirrel-on-a-shopping-cart-with-eggs.jpg?ver=6",
    "https://c1.staticflickr.com/5/4797/26903324668_484bf3b023_b.jpg"
];
var clicks = [45, 60, 3, 356, 1001];
var available = ["single", "single", "taken", "taken", "single"];

//Hér kemur ARRAY loopan -----------------------------------
for(var i = 0; i<names.length; i++){ 
    console.log(i);
    myDiv.innerHTML += `
    <div>
        <h1>${names[i]}</h1>
        <p class="about">Qualities:  ${about[i]}</p>
        <p class="clicks">Profile has been clicked: ${clicks[i]} times</p>
        <p class="avalible">Relationship status: ${available[i]}</p>
        <img width="650px" height ="350px" src="${photos[i]}">
    </div>
    `
}

var button = document.querySelector(".button");
var list = document.querySelector(".list");
var title = document.querySelector("#name");
var picture = document.querySelector("#pic");
var clicks = document.querySelector("#clicks");
var status = document.querySelector("#status");
var description = document.querySelector("#description");

var addCard = function(e){
    console.log("halló aftur");
    
    myDiv.innerHTML += getSquirrel(title.value, description.value, clicks.value, status.value, picture.value,);
}
button.onclick = addCard;

var getSquirrel = function(title, about, clicks, available, photos){
    var boxEvent = `
    <div>
        <h1>${title}</h1>
        <p class="about">Qualities: ${about}</p>
        <p class="clicks">Profile has been clicked: ${clicks} times</p>
        <p class="avalible">Relationship status: ${available}</p>
        <img width="650px" height ="350px" src="${photos}">
    </div>
    `
    return boxEvent;
}
console.log("búin að keyra for loop");


 


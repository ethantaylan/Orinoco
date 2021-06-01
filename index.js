var zoomtda = document.querySelector("#zoomtda")
var zoomtdz = document.querySelector("#zoomtdz")
var zoomtde = document.querySelector("#zoomtde")
var zoomtdr = document.querySelector("#zoomtdr")
var zoomtdt = document.querySelector("#zoomtdt")

var tda = document.getElementById("tda")
var tdz = document.getElementById("tdz")
var tde = document.getElementById("tde")
var tdr = document.getElementById("tdr")
var tdt = document.getElementById("tdt")

var closeImg = document.getElementById ("close-img")
var body = document.getElementById("page-container")

zoomtda.onclick = function() {
    tda.style.width ="60%"
    tda.style.opacity = "1"
    closeImg.style.fontSize = "40px"
    body.style.opacity = "0.3"
}

zoomtdz.onclick = function() {
    tdz.style.width ="60%"
    tdz.style.opacity = "1"
    closeImg.style.fontSize = "40px"
    body.style.opacity = "0.3"
}

zoomtde.onclick = function() {
    tde.style.width ="60%"
    tde.style.opacity = "1"
    closeImg.style.fontSize = "40px"
    body.style.opacity = "0.3"
}

zoomtdr.onclick = function() {
    tdr.style.width ="60%"
    tdr.style.opacity = "1"
    closeImg.style.fontSize = "40px"
    body.style.opacity = "0.3"
}

zoomtdt.onclick = function() {
    tdt.style.width ="60%"
    tdt.style.opacity = "1"
    closeImg.style.fontSize = "40px"
    body.style.opacity = "0.3"
}

closeImg.addEventListener('click', event => {
    closeImg.style.fontSize = "0";
    tda.style.width ="0"
    tdz.style.width ="0"
    tde.style.width ="0"
    tdr.style.width ="0"
    tdt.style.width ="0"
    body.style.opacity ="1"
});

document.onkeydown = function(evt) {
    if (window.event.keyCode == 27) {
        closeImg.style.fontSize = "0";
        tda.style.width ="0"
        tdz.style.width ="0"
        tde.style.width ="0"
        tdr.style.width ="0"
        tdt.style.width ="0"
        body.style.opacity ="1"
    }
};

fetch('http://localhost:3000/api/teddies')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })

function appendData(data) {
    console.log(data)
    var teddy1Price = document.getElementById("td1Price")
    var teddy2Price = document.getElementById("td2Price")
    var teddy3Price = document.getElementById("td3Price")
    var teddy4Price = document.getElementById("td4Price")
    var teddy5Price = document.getElementById("td5Price")
    var teddy1Name = document.getElementById("tdName1")
    var teddy2Name = document.getElementById("tdName2")
    var teddy3Name = document.getElementById("tdName3")
    var teddy4Name = document.getElementById("tdName4")
    var teddy5Name = document.getElementById("tdName5")
        teddy1Name.innerHTML = data[0].name
        teddy2Name.innerHTML = data[1].name
        teddy3Name.innerHTML = data[2].name
        teddy4Name.innerHTML = data[3].name
        teddy5Name.innerHTML = data[4].name
        teddy1Price.innerHTML = data[0].price +"€"
        teddy2Price.innerHTML = data[1].price +"€"
        teddy3Price.innerHTML = data[2].price +"€"
        teddy4Price.innerHTML = data[3].price +"€"
        teddy5Price.innerHTML = data[4].price +"€"
    }

const findElement = (array, data) => {
for (let element of array) {
if (element === data) {
return true;
}
}
return false;
}

console.log(data)


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
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeImg.style.fontSize = "0";
        tda.style.width ="0"
        tdz.style.width ="0"
        tde.style.width ="0"
        tdr.style.width ="0"
        tdt.style.width ="0"
        body.style.opacity ="1"
    }
};
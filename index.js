/* var zoomtda = document.querySelector("#zoomtda");
var zoomtdz = document.querySelector("#zoomtdz");
var zoomtde = document.querySelector("#zoomtde");
var zoomtdr = document.querySelector("#zoomtdr");
var zoomtdt = document.querySelector("#zoomtdt");

var tda = document.getElementById("tda");
var tdz = document.getElementById("tdz");
var tde = document.getElementById("tde");
var tdr = document.getElementById("tdr");
var tdt = document.getElementById("tdt");

var closeImg = document.getElementById("close-img");
var body = document.getElementById("page-container");

zoomtda.onclick = function () {
  tda.style.width = "60%";
  tda.style.opacity = "1";
  closeImg.style.fontSize = "40px";
  body.style.opacity = "0.3";
};

zoomtdz.onclick = function () {
  tdz.style.width = "60%";
  tdz.style.opacity = "1";
  closeImg.style.fontSize = "40px";
  body.style.opacity = "0.3";
};

zoomtde.onclick = function () {
  tde.style.width = "60%";
  tde.style.opacity = "1";
  closeImg.style.fontSize = "40px";
  body.style.opacity = "0.3";
};

zoomtdr.onclick = function () {
  tdr.style.width = "60%";
  tdr.style.opacity = "1";
  closeImg.style.fontSize = "40px";
  body.style.opacity = "0.3";
};

zoomtdt.onclick = function () {
  tdt.style.width = "60%";
  tdt.style.opacity = "1";
  closeImg.style.fontSize = "40px";
  body.style.opacity = "0.3";
};

closeImg.addEventListener("click", (event) => {
  closeImg.style.fontSize = "0";
  tda.style.width = "0";
  tdz.style.width = "0";
  tde.style.width = "0";
  tdr.style.width = "0";
  tdt.style.width = "0";
  body.style.opacity = "1";
});

document.onkeydown = function (evt) {
  if (window.event.keyCode == 27) {
    closeImg.style.fontSize = "0";
    tda.style.width = "0";
    tdz.style.width = "0";
    tde.style.width = "0";
    tdr.style.width = "0";
    tdt.style.width = "0";
    body.style.opacity = "1";
  }
};



*/

var data = fetch("http://localhost:3000/api/teddies")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    var container = document.getElementById("boxProduits");
    container.className = "box-produits";
    for (let i = 0; i < data.length; i++) {
      let dBox = document.createElement("div");
      dBox.className = "box-teddy";
      container.appendChild(dBox);

      let dImgBox = document.createElement("div");
      dImgBox.className = "img-box-teddy";
      dBox.appendChild(dImgBox);

      let dPrice = document.createElement("div");
      dPrice.className = "price-plus-img";
      dImgBox.appendChild(dPrice);

      let sPrice = document.createElement("span");
      sPrice.className = "price teddy4Price";
      sPrice.innerText = data[i].price + "€";
      dPrice.appendChild(sPrice);

      let iPrice = document.createElement("i");
      i.className = "fas fa-search-plus zoom";
      dPrice.appendChild(iPrice);

      let imgPrice = document.createElement("img");
      imgPrice.className = "imgstyle";
      imgPrice.src = data[i].imageUrl;
      dPrice.appendChild(imgPrice);

      let dTitle = document.createElement("div");
      dTitle.className = "title";
      dImgBox.appendChild(dTitle);

      let teddyOptions = document.createElement("div")
      teddyOptions.className = "teddyOptions"
      dImgBox.appendChild(teddyOptions);
    
      let colorOptions = document.createElement("div")
      for (let i = 0; i < data.length; i++)
        document.createElement("div")
        document.className = "BoxColors"
        dImgBox.appendChild(colorOptions)



      

      let dTitleLeft = document.createElement("div");
      dTitleLeft.className = "titleleft";
      dTitle.appendChild(dTitleLeft);

      let TitleLeftTitle = document.createElement("h3");
      TitleLeftTitle.innerHTML = data[i].name;
      TitleLeftTitle.className = "titre";
      dTitleLeft.appendChild(TitleLeftTitle);

      let dTitleRight = document.createElement("div");
      dTitleRight.className = "titleright";
      dTitle.appendChild(dTitleRight);

      let iPanier = document.createElement("i");
      iPanier.className = "fas fa-shopping-cart cursor-scale";
      dTitleRight.appendChild(iPanier);

      let TitleLeftSousTitre = document.createElement("h4");
      TitleLeftSousTitre.className = "sous-titre";
      TitleLeftSousTitre.innerHTML = data[i].description;
      dTitleLeft.appendChild(TitleLeftSousTitre);

      dImgBox.onclick = function() {
        dImgBox.style.width =" 100%"
        dImgBox.style.height =" 100%"
        TitleLeftSousTitre.style.whiteSpace ="normal"
        TitleLeftSousTitre.style.height ="100%"
      }
  }})

function showHide() {
  var autreProduits = document.getElementById("more-products");
  var texteProduits = document.getElementById("txtProduits");
  if (autreProduits.style.height == "250px") {
    autreProduits.style.height = "0px";
    texteProduits.style.opacity = "0";
  } else {
    autreProduits.style.height = "250px";
    texteProduits.style.opacity = "1";
  }
}

function showHideHome() {
  let boxProduits = document.getElementsById("boxProduits");
  if ((boxProduits.style.opacity = "1")) {
  }
}



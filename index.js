var data = fetch("http://localhost:3000/api/teddies")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var container = document.getElementById("boxProduits");
    container.className = "box-produits";
    for (let i = 0; i < data.length; i++) {
      var str = data[i].price;
      var str = String(str).substr(0, 2);
      console.log(str)
      let dBox = document.createElement("div");
      let dImgBox = document.createElement("div");
      let formPlusColorTxt = document.createElement("div")
      let colorTxt = document.createElement("h1")
      let dPrice = document.createElement("div");
      let sPrice = document.createElement("span");
      let iPrice = document.createElement("i");
      let imgPrice = document.createElement("img");
      let dTitle = document.createElement("div");
      let colorsSelect = document.createElement("select")
      let colorsBox = document.createElement("form")
      let dTitleRight = document.createElement("div");
      let dTitleLeft = document.createElement("div");
      let TitleLeftTitle = document.createElement("h3");
      let iPanier = document.createElement("i");
      let TitleLeftSousTitre = document.createElement("h4");
      let options = data[i].colors;
      let divPanier = document.createElement("div")
      dImgBox.appendChild(divPanier)
      divPanier.className = "divpanier"
      let iconePanier = document.createElement('i')
      let iconeCross = document.createElement("i")
      iconeCross.className= "fas fa-times iconecross"
      divPanier.appendChild(iconeCross)
      divPanier.appendChild(iconePanier)
      iconePanier.className= "fas fa-shopping-cart first iconepanier"
      dBox.className = "box-teddy";
      container.appendChild(dBox);
      formPlusColorTxt.className = "form-plus-color-txt-off"

      imgPrice.onclick = function ShowHideColors() {
        if(formPlusColorTxt.className == "form-plus-color-txt-off") {
          formPlusColorTxt.className = "form-plus-color-txt-on"
          iPanier.className = "fas fa-sort-up cursor-scale"
          TitleLeftSousTitre.style.whiteSpace = "normal"

        }
        else {
          iPanier.className = "fas fa-sort-down cursor-scale"
          formPlusColorTxt.className = "form-plus-color-txt-off"
          TitleLeftSousTitre.style.whiteSpace = "nowrap"
        }
      }

      iPanier.onclick = function()  {
        if(formPlusColorTxt.className == "form-plus-color-txt-off") {
          formPlusColorTxt.className = "form-plus-color-txt-on"
          iPanier.className = "fas fa-sort-up cursor-scale"
        }
        else {
          iPanier.className = "fas fa-sort-down cursor-scale"
          formPlusColorTxt.className = "form-plus-color-txt-off"
        }
      }

      divPanier.onclick = function() {
        if(iconePanier.className == "fas fa-shopping-cart iconepanier") {
          iconePanier.style.fontSize ="0px"
          iconeCross.style.fontSize ="30px"
        }
        else if (iconeCross.style.fontSize == "30px") {
          iconePanier.style.fontSize ="30px"
          iconeCross.style.fontSize = "0px"
        }
      }

      let cartIcon = document.createElement("i")
      cartIcon.appendChild(dImgBox)

      colorTxt.className ="colortxt"
      colorTxt.innerHTML ="Couleurs : "
      formPlusColorTxt.appendChild(colorTxt)
      dImgBox.className = "img-box-teddy";
      dBox.appendChild(dImgBox);
      dImgBox.appendChild(formPlusColorTxt)
      dPrice.className = "price-plus-img";
      dImgBox.appendChild(dPrice);
      sPrice.className = "price teddy4Price";
      sPrice.innerText = str + "€";
      dPrice.appendChild(sPrice);
      i.className = "fas fa-search-plus zoom";
      dPrice.appendChild(iPrice);
      imgPrice.className = "imgstyle";
      imgPrice.src = data[i].imageUrl;
      imgPrice.setAttribute('alt', "Image d'ours en peluche")
      dPrice.appendChild(imgPrice);
      dTitle.className = "title";
      dImgBox.appendChild(dTitle);
      colorsBox.className = "#colorsBox"
      formPlusColorTxt.appendChild(colorsBox)
      colorsBox.className = "colorSelect"
      colorsBox.appendChild(colorsSelect)
      colorsSelect.className = "colorSelect"
      options.forEach(function(element,key) {
          colorsSelect[key] = new Option(element, key);
      });
      dTitleLeft.className = "titleleft";
      dTitle.appendChild(dTitleLeft);
      TitleLeftTitle.innerHTML = data[i].name;
      TitleLeftTitle.className = "titre";
      dTitleLeft.appendChild(TitleLeftTitle);
      dTitleRight.className = "titleright";
      dTitle.appendChild(dTitleRight);
      /* let iMoins = document.createElement("i")
      iMoins.className = "fas fa-minus cursor-scale";
      dImgBox.appendChild(iMoins); */
      iPanier.className = "fas fa-sort-down cursor-scale";
      dImgBox.appendChild(iPanier);
      TitleLeftSousTitre.className = "sous-titre";
      TitleLeftSousTitre.innerHTML = data[i].description;
      dTitleLeft.appendChild(TitleLeftSousTitre);
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

function onOffProduits(){
  let allProducts = document.getElementsById("container-full")
}


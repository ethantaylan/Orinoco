var navEnter = document.getElementById ("nav-enter")
var navAccueil = document.getElementById ("nav-accueil")
var navProduits = document.getElementById ("nav-produits")
var navPanier = document.getElementById ("navPanier")
var navContact = document.getElementById ("nav-contact")
var close = document.getElementById("close")
var boite = document.querySelector(".box-teddy")
var pageWelcome = document.getElementById("page-welcome")
var pageAccueil = document.getElementById("page-accueil")
var pageProduits = document.getElementById("page-produits")
var pagePanier = document.getElementById("page-panier")
var pageContact = document.getElementById("page-contact")
var boxWelcome = document.getElementById ("box-welcome")

navEnter.onclick = function() {
    pageWelcome.style.opacity = "0"
    pageWelcome.style.visibility ="hidden"
}

navProduits.onclick = function() {
    pageProduits.style.width = "100%";
    pageProduits.style.opacity ="1"
    boite.style.opacity = "1"
}


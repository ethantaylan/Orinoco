var pageAcceuil = document.getElementById("page-welcome");
var enter = document.getElementById("enter"); 
var pageProduits = document.getElementById("page-produits")
var btnProduits = document.getElementById("produits")

enter.onclick = function () {
    pageAcceuil.style.width ="0%";
    pageAcceuil.style.opacity="0"
}

btnProduits.onclick = function () {
    pageProduits.style.transform ="translateX(0%)";
    btnProduits.style.backgroundColor ="salmon";
}




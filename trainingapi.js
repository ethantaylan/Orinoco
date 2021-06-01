fetch('http://localhost:3000/api/teddies')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
function appendData(data) {
    var baliseH1 = document.getElementById("price");
    for (var i = 0; i < data.length; i++) {
        var lignePrix = document.createElement("div");
        lignePrix.innerHTML = data[i].name;
        baliseH1.appendChild(lignePrix);
        console.log(data)
    }
}
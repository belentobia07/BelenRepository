<<<<<<< HEAD
let login = false
document.addEventListener("DOMContentLoaded", function () {

    let usu = document.getElementById("usu")

    let nameU = localStorage.getItem("usu")
    usu.innerHTML = nameU



    document.getElementById("login").addEventListener("click", function () {
        window.location = "login.html"



    })

    document.getElementById("autos").addEventListener("click", function () {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function () {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function () {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

});


=======
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
>>>>>>> e28a30af2c05698e5863207ff4f5b7e27e2b3fad

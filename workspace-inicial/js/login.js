let usu = "";
let sub = true;
function regresar() {
    window.location.href = "index.html"

}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validateForm)
});

function validateForm(event) {
    let forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms).forEach(function (form) {

        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            sub = false


        } if (form.checkValidity()) {

            usu = document.getElementById("email").value
            localStorage.setItem("usu", usu)

            sub = true;

        }

        form.classList.add('was-validated')

    })
    if (sub) {




        regresar()
        alert("iniciaste sesión como: " + usu)



    }

}




/*(function () {
    'use strict'



    let forms = document.querySelectorAll('.needs-validation')
    let usu = document.getElementById("email").value




    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()


            }
            form.classList.add('was-validated')





        }, false)


    })






})()*/




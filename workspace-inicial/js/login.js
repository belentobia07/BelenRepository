

function regresar() {
    window.location.href = "index.html"
}

(function () {
    'use strict'



    let forms = document.querySelectorAll('.needs-validation')




    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                submit = false;

            }
            form.classList.add('was-validated')





        }, false)


    })






})()




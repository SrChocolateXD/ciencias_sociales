document.addEventListener("DOMContentLoaded", function () {

    const anioActual = document.getElementById("anioActual");

    if (anioActual) {
        anioActual.textContent = new Date().getFullYear();
    }

    const formulario = document.getElementById(
        "formularioContacto"
    );

    const mensajeFormulario = document.getElementById(
        "mensajeFormulario"
    );

    if (formulario) {

        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            if (!formulario.checkValidity()) {

                evento.stopPropagation();

                formulario.classList.add("was-validated");

                mensajeFormulario.className =
                    "alert alert-danger";

                mensajeFormulario.textContent =
                    "Revisa los campos marcados antes de enviar.";

                mensajeFormulario.classList.remove("d-none");

                return;
            }

            mensajeFormulario.className =
                "alert alert-success";

            mensajeFormulario.textContent =
                "Tu consulta fue enviada correctamente.";

            mensajeFormulario.classList.remove("d-none");

            formulario.reset();

            formulario.classList.remove("was-validated");
        });
    }
});
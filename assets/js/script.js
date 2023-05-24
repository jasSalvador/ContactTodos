/*Una vez ingresados los datos, se mostrará una ventana con el nombre completo, el correo 
electrónico, y el número de teléfono del nuevo contacto y la opción de llamarlo o enviarle un 
correo electrónico.*/

//evento click boton
document.getElementById("btnGuardar").addEventListener("click", (event) => {
    event.preventDefault();

    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let telefono = document.getElementById("inputTelefono").value;
    let correo = document.getElementById("inputEmail").value;
    let nota = document.getElementById("texTarea").value;

    let datosContacto = { nombre, apellido, telefono, correo, nota }

    function verContacto(datos) {
        let { nombre, apellido, correo, telefono, nota } = datos
        //console.log(datos);

        if (validar(datosContacto)) {
            document.getElementById("datos").innerText = (`Nombre: ${nombre} ${apellido} Email: ${correo} ${telefono} \n Nota: ${nota}`);

            const modalContacto = new bootstrap.Modal(document.getElementById("modalContacto"));
            modalContacto.show();
        }
    }
    verContacto(datosContacto);
});


//validacion
const validar = (datos) => {
    //valida q no hayan datos vacios
    for (let propiedades in datos) {
        if (datos[propiedades] === '') {
            alert("Debes ingresar todos los datos");
            return false;
        }
    }
    return true;
};






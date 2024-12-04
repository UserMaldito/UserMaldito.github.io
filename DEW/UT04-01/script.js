const DOM = {
    formulario: document.forms[0],
    nombreUsuario: document.getElementById("NombreUsuario"),
    contrasena: document.getElementById("Contrasena"),
    nombreReal: document.getElementById("Nombre"),
    apellidos: document.getElementById("Apellidos"),
    telefono: document.getElementById("Telefono"),
    codigoPostal: document.getElementById("CodigoPostal"),
    tipoDocumento: document.getElementById("TipoDocumento"),
    cuentaComo: document.getElementById("CuentaComo"),
    anioNacimiento: document.getElementById("AnioNacimiento"),
    aficiones: document.getElementById("Aficiones"),
    aficionesCheckbox: document.querySelectorAll("[type=checkbox]"),
    publicacionTitulo: document.getElementById("PublicacionTitulo"),
    publicacionDescripcion: document.getElementById("PublicacionDescripcion"),
    fieldsetError: document.querySelectorAll("fieldset")[1]
};

let RatificandoContrasena = () => {
    if (DOM.contrasena.textContent.trim().length == 8) {
        return null;
    }
};
//Valida: NombreUsuario, Nombre, Apellido, AnioNacimiento, PublicacionTitulo y PublicacionDescripcion.
let RatificandoDatos = (campo, nombre, validationMessage) => {
    // if (!(datoCampo >= min) && (datoCampo <= max)) {

    if (!campo.validity.valid) {
        if (validationMessage == "") {
            validationMessage = "Dato Inválio. Debe entar dentro del rango establecido: Min: " + min + " / Max: " + max;
        }
        throw ("Error campo " + nombre + ": " + validationMessage);
    }
};

//Valida: Telefono, Contraseña y CodigoPostal
let RatificandoPattern = (campo, regex) => {
    if (campo.value.trim().match(regex)) {
        return true;
    }
    let mensaje = "Dato Inválio. No cumple con los requisitos...";
    throw ("Error campo " + campo.name + ": " + campo.validationMessage);
};
let RatificandoDNINIE = (campo, regex) => {

};
//Valida: CuentaComo, TipoDocumento
let RatificandoCampoVacio = (campo) => {
    if (campo.value.trim().length == 0) {
        throw ("Error campo " + campo.name + ": " + campo.validationMessage);
    }
};
let RatificandoAficiones = () => {

};
let MostrarError = (evento, mensaje) => {
    evento.preventDefault();

    let cajaError = document.createElement("span");
    cajaError.textContent = mensaje;
    DOM.fieldsetError.appendChild(cajaError);
};
let LimpiarError = () => {
    DOM.fieldsetError.childNodes.forEach((nodo) => nodo.remove());
};

let ValidadorFormulario = (e) => {
    LimpiarError();

    const MIN_STRING = 4;
    const MIN_ANIO = 1920;
    const MAX_LENGH_TITULO = 15;
    const MAX_STRING_USER_DATA = 20;
    const MAX_LENGH_PUBLICACION = 120;
    const MAX_ANIO = 2010;

    const REGEX_TELEFONO = "/\((\+[\d]{1,3})\)([\d]{9})/gmA";
    const REGEX_PASSWORD = "/[\d]{8}/gmA";
    const REGEX_CODIGO_POSTAL = "/38[\d]{3}/gmA";


    try {
        let nombreUsuario = RatificandoDatos(DOM.nombreUsuario, DOM.nombreUsuario.id, DOM.nombreUsuario.validationMessage);
        let contrasena =  RatificandoPattern(DOM.contrasena.value, REGEX_PASSWORD);
        let nombreReal =  RatificandoDatos(DOM.nombreReal.value.trim().length, MIN_STRING, MAX_STRING_USER_DATA, DOM.contrasena.id, DOM.contrasena.validationMessage);
        let apellidos =  RatificandoDatos(DOM.apellidos.value.trim().length, MIN_STRING, MAX_STRING_USER_DATA, DOM.apellidos.id, DOM.apellidos.validationMessage);
        let telefono = RatificandoPattern(DOM.telefono.value, REGEX_TELEFONO);
        let codigoPostal =  RatificandoPattern(DOM.codigoPostal.value, REGEX_CODIGO_POSTAL);
        
        let tipoDocumento = DOM.tipoDocumento.value;
        let cuentaComo = DOM.cuentaComo.value;
        
        let anioNacimiento = RatificandoDatos(DOM.anioNacimiento.value.trim(), MIN_ANIO, MAX_ANIO, DOM.anioNacimiento.id, DOM.anioNacimiento.validationMessage);
        
        let aficiones = Array
            .from(DOM.aficionesCheckbox)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        
        let publicacionTitulo = RatificandoDatos(DOM.publicacionTitulo.value.trim().length, MIN_STRING, MAX_LENGH_TITULO, DOM.publicacionTitulo.id, DOM.publicacionTitulo.validationMessage);
        let publicacionDescripcion = RatificandoDatos(DOM.publicacionDescripcion.value.trim().length, MIN_STRING, MAX_LENGH_PUBLICACION, DOM.publicacionDescripcion.id, DOM.publicacionDescripcion.validationMessage);
    } catch (error) {
        MostrarError(e, error);
    }

};

(function () {
let x = 9;
    DOM.formulario.addEventListener("submit", (e) => {ValidadorFormulario(e)});
}
)();
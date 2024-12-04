const DOM = {
    formulario: document.forms[0],
    nombreUsuario: document.getElementById("NombreUsuario"),
    contrasena: document.getElementById("Contrasena"),
    mostrarContrasena: document.getElementById("show"),
    nombreReal: document.getElementById("Nombre"),
    apellidos: document.getElementById("Apellidos"),
    telefono: document.getElementById("Telefono"),
    codigoPostal: document.getElementById("CodigoPostal"),
    tipoDocumento: document.getElementById("TipoDocumento"),
    valorDocumento: document.getElementById("DniNie"),
    cuentaComo: document.getElementsByName("CuentaComo"),
    anioNacimiento: document.getElementById("AnioNacimiento"),
    aficiones: document.getElementById("Aficiones"),
    aficionesCheckbox: document.querySelectorAll("#section-2 [type=checkbox]"),
    publicacionTitulo: document.getElementById("PublicacionTitulo"),
    publicacionDescripcion: document.getElementById("PublicacionDescripcion"),
    fieldsetError: document.querySelectorAll("fieldset")[1]
};

let ErrorObjeto = {
    campo,
    mensaje: ""
};
//Valida: NombreUsuario, Nombre, Apellido, AnioNacimiento, Telefono, Contraseña, CodigoPostal, PublicacionTitulo y PublicacionDescripcion.
let RatificandoDatos = (campo) => {
    if (!campo.validity.valid) {
        ErrorObjeto.campo = campo;
        ErrorObjeto.mensaje = "Error Campo " + campo.name + ": " + campo.validationMessage;
        throw (ErrorObjeto);
    }
    return true;
};

let RatificandoDNINIE = (campoDocumento, valorDocumento) => {
    let dniCorrecto = RatificandoDatos(valorDocumento);
    if (dniCorrecto) {
        const ARRAY_LETRAS_DNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

        let digitoControl = 0;
        var numeroDni = valorDocumento.value.slice(0, valorDocumento.value.length - 1);

        if (campoDocumento.value == "NIE") {
            let primeraLetraDni = valorDocumento.value.slice(0, 1).toUpperCase();
            switch (primeraLetraDni) {
                case "X":
                    digitoControl = 0;
                    break;
                case "Y":
                    digitoControl = 1;
                    break;
                case "Z":
                    digitoControl = 2;
                    break;            
                default:
                    ErrorObjeto.campo = campo;
                    ErrorObjeto.mensaje = "Error Campo " + campoDocumento.name + ": " + "Primera Letra del NIE No Válido";
                    throw (ErrorObjeto);
            }
            
            numeroDni = valorDocumento.value
            .replace(valorDocumento.value[0], digitoControl)
            .slice(0, valorDocumento.value.length - 1);
        }

        let letraDNI = valorDocumento.value.slice(valorDocumento.value.length - 1, valorDocumento.value.length).toUpperCase();
        let restoNumeroDni = (numeroDni) % 23;
        let letraCalculada = ARRAY_LETRAS_DNI[restoNumeroDni];

    if (letraCalculada != letraDNI) {
            ErrorObjeto.campo = campo;
            ErrorObjeto.mensaje = "Error Campo " + campoDocumento.name + ": " + "DNI/NIE No Válido";
            throw (ErrorObjeto);
        }
    }
};
let RatificandoCuenta = (campo) => {
    let tipoCuenta = "";
    
    campo.forEach((cuenta) => {
        if (cuenta.checked) {
            tipoCuenta = cuenta.value;
        }
    });

    if (tipoCuenta == "") {
        ErrorObjeto.campo = campo;
        ErrorObjeto.mensaje = "Error Campo " + campo.name + ": Debe elegir al menos 1 Tipo de Cuenta";
        throw (ErrorObjeto);
    }

    return tipoCuenta;
};

let VerificandoAficiones = (checkboxArray, campo) => {
    let aficiones = Array
            .from(checkboxArray)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value.toString());

    if (aficiones.length < 2) {
        ErrorObjeto.campo = campo;
        ErrorObjeto.mensaje = "Error Campo " + campo.name + ": Debe seleccionar un mínimo de 2 " + campo.name;
        throw (ErrorObjeto);
    }

    return JSON.stringify(aficiones);
};
let MostrarErrorPersonal = (mensaje) => {
    let cajaError = document.createElement("span");
    cajaError.textContent = mensaje;
    DOM.fieldsetError.appendChild(cajaError);
};
let MostrarErrorDefault = (objetoError) => {
    let cajaError = document.createElement("span");
    cajaError.textContent = mensaje;
    objetoError.campo.insertAdjacentElement("afterend", cajaError);
};
let LimpiarError = () => {
    DOM.fieldsetError.childNodes.forEach((nodo) => nodo.remove());
};

let ValidadorFormulario = (e) => {
    LimpiarError();
    
    try {
        RatificandoDatos(DOM.nombreUsuario);
        RatificandoDatos(DOM.contrasena);
        RatificandoDatos(DOM.nombreReal);
        RatificandoDatos(DOM.apellidos);
        RatificandoDatos(DOM.telefono);
        RatificandoDatos(DOM.codigoPostal);
        
        RatificandoDNINIE(DOM.tipoDocumento, DOM.valorDocumento)

        RatificandoCuenta(DOM.cuentaComo);
        RatificandoDatos(DOM.anioNacimiento);
        
        DOM.aficiones.value = VerificandoAficiones(DOM.aficionesCheckbox, DOM.aficiones)
        
        RatificandoDatos(DOM.publicacionTitulo);
        RatificandoDatos(DOM.publicacionDescripcion);
    } catch (errorObjeto) {
        evento.preventDefault();

        MostrarErrorPersonal(errorObjeto);
        MostrarErrorDefault(errorObjeto);
    }
};

(() => {
    DOM.formulario.addEventListener("submit", (e) => {ValidadorFormulario(e)});

    //Verifica si, al cargar el formulario, se muestra la contraseña
    DOM.contrasena.type = DOM.mostrarContrasena.checked? "text" : "password";
    //Luego ya le digo que cambie de tipo si detecta cambio
    DOM.mostrarContrasena.addEventListener("change", () => {
        DOM.contrasena.type = DOM.mostrarContrasena.checked? "text" : "password";
    });
    
}
)();

/*
    Falta:
    - Desuso del Br en el HTML
    - Parte Izq. mensaje por defecto / Parte Der. mensaje personalizado
    - Cambiar ValorDocumento por DniNie
    - Implementar número de caracteres introducidos en los input finales
    - Implementar cambio de Estado (de inválido a válido) en todos los campos
    - Uso modular del ESM
    - 
*/
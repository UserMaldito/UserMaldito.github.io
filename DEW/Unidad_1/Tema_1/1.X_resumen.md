# Unidad 1: Fundamentos de JS (Java Script)

#### 1.1 Variables (guardar datos en memoria con un nombre en específico):
	- Let: funciona dentro de un ámbito {}, fuera de éste no existe
	- Const: una vez definido, no se puede modificar (propiedad "readonly")
	- Var: ámbito global

#### 1.2 Interfaz Básica de Usuario:
	- Prompt: La página pregunta, el usuario responde (para poner información)
	- Alert: La página muestra un mensaje
	- Confirm: La página pregunta un mensaje y el usuario elige entre "Sí o No"

#### 1.3 Tipos de Datos (no confundir con variables) [link extendido -> https://www.w3schools.com/js/js_datatypes.asp]:
	- String: va con comillas ("", '', ``) - cadena de texto --> "Ho" + "la" / 'Ho' + 'la' / `Ho${miVariable}`
	- Number: Número --> 2 / 137613 / -51
	- Bigint: Número muy grande --> 4392649326946239467923467236
	- Boolean: --> Si/No | 0/1 | Aceptar/Cancelar
	- Undefined: variable definido pero sin valor --> let x; //Output: x = undefined (Undefined != Null != "")
	- Null: variable definido con un valor nulo --> let y = null; //Output: y = null
	- Object: va con llaves ({}) - asocia clave y valor --> const profesor = {nombre: "User", edad: 23, isAlive: 		true, sexo: 'M'};

#### 1.4 Uso del código limpio (Clean Code):
	- Comentario en línea: //
	- Comentario en bloque: /* */
	- Indentación: uso del tabulador (tab) [agrega 4-5 espacios]. Usado para ver/estructurar mejor el código

#### 1.5 Métodos del (Tipo de Dato) String [let miNombre = "User";]:
	- .concat(+) -> junta cadenas --> minombre.concat(" Maldito"); //miNombre = "User Maldito"
			- Alternativa: "" + "" --> miNombre += " Maldito" / miNombre = miNombre + " Maldito"
			- Alternativa: `` --> miNombre = `${miNombre} Maldito`;
	- .startsWith(+) -> te indica si dicha variable empieza por esa letra
			--> miNombre.startsWith("E");//Output: false
	- .replace(+, +) -> reemplaza --> minombre.replace(" Maldito", " Not found"); //miNombre = "User Not Found"
	- .toUpperCase()/.toLowerCase() -> convierte la cadena completa en MAYÚSCULAS/minúsculas
					--> miNombre.toUpperCase(); //Output: "USER NOT FOUND"
					--> miNombre.toLowerCase(); //Output: "user not found"
	- .substring(1+,2+) -> busca en la posición 1+ y te devuelve todo hasta 2+
				--> let primeraParte = miNombre.substring(0, 4) //Output: primeraParte = "User"
				-- let ultimaParte = miNombre.substring(minombre.length - 6, minombre.length -1)
				---> RECUERDA: las posiciones SIEMPRE empienzan en 0 y acaban en .length - 1
	- .split(+) -> Parte la cadena en +
			--> let nombreSeparado = miNombre.split(" "); //Output: nombreSeparado = ["user", "not", 													found"]
	- .trim() -> quita los espacios iniciales y finales
	- .join() [Array] -> une los elementos de dicho Array
			--> let miNuevoNombre = nombreSeparado.join()

#### 1.6 NaN (Not A Number) [let numero = 3]:
	- Valor imposible o indeterminado
	- Uso (Ejemplo): Number.isNaN(numero) //Output: false (porque 3 es un número determinado)
			 Number.isNaN("Hola Mundo") //Output: false (no es un número indeterminado)

#### 1.7 Operadores:
	- Asignación:
	 	- Poner Valor -> = --> let entiendo = true;
	- Aritmético (Matemáticas):
		- Poner Valor y Sumar/Restar/Multiplicar/Dividir 	--> let num1 = 1; let num2 = 3; num1 += num2;
									//Output num1 = 3 + 1 = 4
									--> let num1 = 1; let num2 = 3; num1 -= num2;
									//Output num1 = 1 - 3 = -2
									--> let num1 = 1; let num2 = 3; num1 *= num2;
									--> let num1 = 1; let num2 = 3; num1 /= num2;
	- Comparación:
		- ¿Es igual a...? --> let vida = 100; let esVidaMaxima = (vida == 100); //Output: esVidaMaxima = true
		- ¿Es Mayor/Menor que...) --> let vida = 48; let isDeath = (vida <= 0); let stillAlive = (vida >= 0);

#### 1.8 Bucles:
	- *Condicional: -> if(true){//Do something}else{//Do Something}
			--> let vida = 37; if(vida > 0){stillAlive = true;}else{stillAlive = false; DestroyAnimation();}
	- For -> no para hasta terminar su recorrido
		--> for(let index = 0; index<=10; index++){//Do Something}
	- While -> para si se cumple una condición
		--> while(index<10){console.log("Adiós Mundo"); index++; (el index++ es MUY IMPORTANTE)}
	- DoWhile -> igual que el while, pero inicia sin ver la condición
		--> do{console.log("Adiós Mundo"); index++; (sin el index++ nunca se acabaría el bucle)}while(index<=10)

#### 1.9 Funciones:
	- Trozos de códigos. Lo declaras una vez (como una variable) y lo puedes volver a usar.
	- Declaración: function Nombre(parametros){//Do Something}
	-> Alternativa (función como variable): let nombre = (parametros) => {//Do Something};
	- return: hace que la función devuelva un dato

	--> function MayorEdad(edad){let mayorEdad = false; if(edad>=18){mayorEdad = true;} return mayorEdad}
		//Input: MayorEdad(10) Output: false
	--> let mayorEdad = (edad) => {let mayorEdad = false; if(edad>=18){mayorEdad = true;} return mayorEdad};
		//Input: mayorEdad(18) Output: true

	- Parámetros Rest: funciones que acepten cualquier número de argumentos -> (...+)

	- AutoEjecutables: se ejecutan nada más cargar el navegador -> (//Do Something)();

#### 1.10 Gestión de Errores:
	- Por alerta --> if(true){//Do Something}else{alert("Error: ...");}
	- Por Número no Válido --> if(true){//Do Something}else{return -1;}
	- Por Try-Catch-Throw
		--> try{if(true){//Do Something}else{throw("Error: ...")}}catch (exception){alert(exception);}

#### 1.11 Método ForEach (let numeros = [1,2,3,4])
	- Refinado del for
	-> Estructura: .forEach((elemento, index))
	--> numeros.forEach(num => console.log(num));

#### 1.12 Objetos:
	-> Definición: {}
	- Recuerda: clave: valor --> let persona = {nombre: "User Maldito", edad: 23};
	- Acceso a Propiedades --> persona.nombre = "User;
				--> Alternativa: persona["nombre"];
	- Pueden ponerse funciones y condicionales en los objetos, accediendo como una propiedad
		--> let persona = {nombre: "User Maldito", edad: 23, saludo: function() {alert("Hola " + this.nombre);}};
	- Uso del this -> usa el valor de la propiedad del objeto (dentro del objeto)
		--> persona.saludo(); //Output: "Hola User"

#### 1.13 LocalStorage:
	- Lugar para guardar datos (persistencia de datos).
	-> Firefox: F12 > Almacenamiento > Almacenamiento Local
	-> Chrome: F12 > Aplicación > Almacenamiento Local 
	-> Métodos: .getItem(1+) / setItem(1+, 2+)
	--> localStorage.setItem("User's Data", miNombre);
	- Recomendación: usar JSON.stringify(1+)/JSON.parse(1+)/
	--> localStorage.setItem("User's Object", JSON.stringify(persona))
	--> JSON.parse(localStorage.getItem("User's Object"));

#### 1.14 Fechas (Clase Date):
	--> Date.now / let myDate = new Date() / let myBday= new Date("2000-12-14") / let myLittleSisBday= new Date("1999/3/4") / / let myBigSisBday= new Date(1997, 10, 16)
	- Internacionalización
	--> new Intl.DateTimeFormat("es", {weekday: "short",day: "2-digit",month: "long",year: "numeric",hour: "2-digit",minute: "2-digit"}).format(new Date(2021,09,10,8,0));

#### 1.15 Clases:
	- Creación de objeto con función constructora
	--> function Persona (nombre, edad){this.nombre = nombre; this.edad = edad} let Persona = new Persona("User", 23);


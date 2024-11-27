# Unidad 2: Definicion y Gestión de Colecciones y Objetos

### 2.1 Métodos (en colecciones):
#### 2.1.1 .map(x => return x)
	-> Retorna Array Modificado
	--> [1,2,3,4].map(number => return (number * 2));

#### 2.1.2 .filter(x => return x)
	-> Retorna Array Filtrado
	--> [1,2,3,4].filter(number => return (number % 2 == 0));

#### 2.1.3 .reduce((ac, e) => return ac+e)
	-> Retorna Array Reducido / Se puede usar para concatenar
	--> [1,2,3,4].reduce((acumulador, element) => {return acumulador + element}, 5);
	
#### 2.1.4 .some(x => x==true)
	-> Retorna True/False (¿Algún elemento cumple la condición?)
	--> [1,2,3,4].some(number => (number < 3));

#### 2.1.5 .every(x => x==true)
	-> Retorna True/False (¿Todos los elementos cumplen la condición?)
	--> [1,2,3,4].map(number => return (number * 2));
	
#### 2.1.6 .findIndex(x => x==true)
	-> Retorna Posición en Array (¿Algún elemento cumple la condición?)
	--> [1,2,3,4].findIndex(number => (number * 2 == 0));

#### 2.1.7 .find(x => x==true)
	-> Retorna Objeto en Array (¿Algún elemento cumple la condición?)
	--> [1,2,3,4].find(number => (number * 2 == 0));

#### 2.1.8 .splice(pos1, pos2, ...elementos)
	-> Borra/Inserta/Reemplaza Elementos (depende de los parámetros)
	--> Borrar: [1,2,3,4].splice(2,1); [Borrar = 2 parámetros: Posición Inicial y 1 (1 = eliminar)]
	--> Insertar: [1,2,3].splice(2, 0, [6,7,8]); [Insertar = 3 parámetros: Posición Inicial, 0 (0 = no eliminar) y Elementos]
	--> Reemplazar: [1,2,3,6,7,8].splice(2,1, [4,5,6]); [Reemplazar = 3 parámetros: Posición Inicial, 1 y Elementos]

#### 2.1.9 .sort(x,y => return return x-y)
	-> Retorna Array Ordenado (Según Los Parámetros) / Mayor que 0: ordena de menor a mayor / Menor que 0: ordena  de mayor a menor
	--> de - a +: [1,2,3,4].sort((a,b) => a-b);
	--> de + a -: [1,2,3,4].sort((a,b) => a+b);
	--> de - a + (String): ["Juana", "Antonio", "Manolo"].sort((a,b) => a.localeCompare(b)); //Output: ["Antonio", "Juana", "Manolo"]
	--> de + a - (String): ["Juana", "Antonio", "Manolo"].sort((a,b) => b.localeCompare(a)); //Output: ["Manolo", "Juana", "Antonio"]

### 2.2 Operador Spread (…a) [let num1 = [1,2,3]; let num2 = [3,4,5]]:
	--> let num3 = [...num1, ...num2] //Output: num3 = [1, 2, 3, 3, 4, 5]
	- Funciona con objetos y sus atributos
	--> programadores.map(programador => {return { ...programador, menorDe25: (programador.edad <= 25 ? true : false)}})

### 2.3 Set():
	- Nos permite tener ELEMENTOS ÚNICOS de cualquier tipo
	--> let mySet = new Set(1,2,3,2,1,4,3,5) //Output: mySet = [1,2,3,4,5]

### 2.4 Módulos:
	- Import + Export
	-> export [...(dato), name, name as newName, (f1,f2,f3), * from "/file.js", default]
	-> import [ "" (vacío = ejecuta todo el fichero) ,name, name as …, {f1, f2, f3}, * as name] from "/file.js" / "https://iamuser.fun/file.js"

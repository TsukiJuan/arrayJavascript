let fruits = ["Apple", "Orange","Banana"];
let palabras = ["hola", "mundo", "JavaScript", "arreglo"];
let booleanos = [true, false, true, false];
let consecutivos = [1, 2, 3, 4, 5];
const unicoElemento = [42];



// Arreglo de frutas
console.log(fruits.length);
fruits.push("Grapes");
console.log(fruits);
console.log(fruits.indexOf("Orange"));
fruits.pop();
console.log(fruits);

// Arreglo de palabras
console.log(palabras.length);
palabras.push("nuevo");
console.log(palabras);
console.log(palabras.indexOf("JavaScript"));
palabras.pop();
console.log(palabras);

// Arreglo de booleanos
console.log(booleanos.length);
booleanos.push(true);
console.log(booleanos);
console.log(booleanos.indexOf(false));
booleanos.pop();
console.log(booleanos);

// Arreglo de consecutivos
console.log(consecutivos.length);
consecutivos.push(6);
console.log(consecutivos);
console.log(consecutivos.indexOf(3));
consecutivos.pop();
console.log(consecutivos);

// Arreglo de único elemento
console.log(unicoElemento.length);
unicoElemento.push(43);
console.log(unicoElemento);
console.log(unicoElemento.indexOf(42));
unicoElemento.pop();
console.log(unicoElemento);
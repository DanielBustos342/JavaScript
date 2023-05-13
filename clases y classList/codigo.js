// clases, classList y métodos de classList

//add() – añade una clase

const titulo = document.querySelector(".titulo");

titulo.classList.add("grande");

//remove() – remueve una clase

const titulo2 = document.querySelector(".titulo2");

titulo2.classList.remove("grande");

//ítem() – devuelve la clase del índice especificado (es para pedir informacion NO MODIFICA LAS CLASES)

const titulo3 = document.querySelector(".titulo3");

let valor = titulo3.classList.item(2);

document.write(valor);

//contains() – verifica si ese elemento posee o no, la clase especificada (muestra si tiene esa informacion y devuelve un booleano)

const titulo4 = document.querySelector(".titulo4");

let valor2 = titulo4.classList.contains("grande");

document.write(valor2);

//replace() – reemplaza una clase por otra
//toggle() – si no tiene la clase especificada, la agrega, si ya la tiene, la elimina

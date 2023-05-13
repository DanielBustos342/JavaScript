//ATRIBUTOS GLOBALES

//contenteditable – indica si el elemento puede ser modificable por el usuario (bool)

const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable","true"); //titulo.setAttribute("contentEditable","false"); 

//dir – indica la direccionalidad del texto

const titulo2 = document.querySelector(".titulo2");

titulo2.setAttribute("dir","rtl");

//hidden – indica si el elemento aun no es, o ya no es, relevante

const titulo3 = document.querySelector(".titulo3");

titulo3.setAttribute("hidden","false");

//tabindex – indica si el elemento puede obtener un focus de unput

const titulo4 = document.querySelector(".titulo4");

titulo4.setAttribute("tabindex","0"); // se puede hacer focus

//title – contiene un texto con información relacionada al elemento al que pertenece

const titulo5 = document.querySelector(".titulo5");

titulo5.setAttribute("title","se escribe lo que se quiera");


//ATRIBUTOS DE INPUTS

//className

const input = document.querySelector(".input-normal");

document.write(input.className);

//value

const input2 = document.querySelector(".input-normal2");

document.write(input2.value);

//type

const input3 = document.querySelector(".input-normal3");

input3.type = "range";

//accept son para los type = "file"

const input4 = document.querySelector(".input-normal4");

input4.accept = "image/png";

//form esta en el codigo html linea 26

//minLcength es la cantidad de caracteres minimos que se permiten

const input5 = document.querySelector(".input-normal5");

input5.setAttribute("minLength","5");

//placeholder

const input6 = document.querySelector(".input-normal6");

input6.placeholder = "helouda papuu";

//required tienen que completar el campo si o si

const input7 = document.querySelector(".input-normal7");

input7.required = " ";

//atributo Style 

const titul = document.querySelector(".titul");

titul.style.color = "blue";

const titul2 = document.querySelector(".titul2");

titul2.style.backgroundColor = "#32b";
titul2.style.padding = "30px";
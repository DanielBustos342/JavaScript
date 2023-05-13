let cadena = "cadena de prueba";
let cadena2 = " cadena ";
let cadena3 = new String("cadena string que es lo mismo");
let cadena4 = "pedro es un tarado tarado tarado tarado"
let cad = "cadena";

//Contat() – junta dos o más cadenas y retorna una nueva
document.write("<b>contat()</b> – junta dos o más cadenas y retorna una nueva <br>");
resultado = cadena3.concat(cadena2);
document.write(resultado + "<br><br>");

// startsWith() – si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.

document.write("<b>startsWith()</b> – si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.<br>");
resultado2 = cadena.startsWith(cadena2);
res2 = cadena.startsWith(cad);
document.write(res2 + "<br>");
document.write(resultado2 + "<br><br>");

//endsWith() – si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.

document.write("<b>endsWith()</b> – si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.<br>");
resultado3 = cadena.endsWith(cadena2);
document.write(resultado3 + "<br><br>");

//includes() – si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.

document.write("<b>includes()</b> – si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.<br>");
resultado4 = cadena3.includes(cad);
document.write(resultado4 + "<br><br>");

//indexOf() – devuelve el índice del primer carácter de la cadena, si no existe, devuelve -1.

document.write("<b>indexOf()</b> – devuelve el índice del primer carácter de la cadena, si no existe, devuelve -1.<br>");
resultado5 = cadena3.indexOf("s");
document.write(resultado5 + "<br><br>");

resultado6 = cadena3.indexOf("string");
document.write(cadena3[7] + "<br><br>");

//lastIndexOf () – devuelve el ultimo índice del primer carácter de la cadena, si no existe, devuelve -1

document.write("<b>lastIndexOf ()</b> – devuelve el ultimo índice del primer carácter de la cadena, si no existe, devuelve -1<br>");
resultado7 = cadena4.lastIndexOf("tarado");
document.write(cadena4[33] + cadena4[34] + cadena4[35] + "<br><br>");

//padStart() – [propuesta de Estandar] – rellenar cadena al principio con los caracteres deseados

document.write("<b>padStart()</b> – [propuesta de Estandar] – rellenar cadena al principio con los caracteres deseados<br>");
resultado8 = cadena2.padStart(10, "A");
document.write(resultado8 + "<br><br>");

//padEnd() – [propuesta de ECMA] – rellenar cadena al final con los caractereas deseados

document.write("<b>padEnd()</b> – [propuesta de ECMA] – rellenar cadena al final con los caractereas deseados<br>");
resultado9 = cadena2.padEnd(10, "A");
document.write(resultado9 + "<br><br>");

//repeat() – devuelve la misma cadena pero repetida la cantidad que le indiquemos

document.write("<b>repeat()</b> – devuelve la misma cadena pero repetida la cantidad que le indiquemos <br>");
resultado10 = cadena2.repeat(3);
document.write(resultado10 + "<br><br>");

//split() – divide la cadena como le pidamos

document.write("<b>split()</b> – divide la cadena como le pidamos<br>");
let cadena5 = "hola como estas"

resultado11 = cadena5.split(" ");
document.write(resultado11 + "<br><br>");
document.write(resultado11[2] + "<br><br>");

//substring() – nos retorna un pedazo de la cena que seleccionamos

document.write("<b>substring()</b> – nos retorna un pedazo de la cena que seleccionamos<br>");
let cadena6 = "ABCDEFGHIJKALMNOPQRSTUVWXYZ";

resultado12 = cadena6.substring(3,20);
document.write(resultado12 + "<br><br>");

//toLowerCase() – convierte una cadena a minúscula

document.write("<b>toLowerCase()</b> – convierte una cadena a minúscula<br>");
resultado13 = cadena6.toLowerCase();
document.write(resultado13 + "<br><br>");

//topUpperCase() – convierte una cadena a mayúsculas

document.write("<b>topUpperCase()</b> – convierte una cadena a mayúsculas<br>");
let cadena7 = "abcdefghijk"

resultado14 = cadena7.toUpperCase();
document.write(resultado14 + "<br><br>");

//toString() – método devuelve una cadena que representa al objeto especificado combierte un dato a string

document.write("<b>toString()</b> – método devuelve una cadena que representa al objeto especificado combierte un dato a string<br>");
let cadena8 = 50;
let cadena9= "pedro, matias";

resultado15 = cadena8.toString();
document.write(resultado15 + "<br><br>");
resultado16 = cadena9.toString();
document.write(resultado16[0] + "<br><br>");

//trim() – elimina los espacios en blanco al principio y al final de una cadena

document.write("<b>trim()</b> – elimina los espacios en blanco al principio y al final de una cadena <br>");
let cadena10 = "   pedro    ";

resultado17 = cadena10.trim();
document.write(resultado17 + "<br><br>");
document.write(resultado17.length + "<br><br>");

// trimEnd() – elimina los espacios en blanco al final de la cadena

document.write("<b>trimEnd()</b> – elimina los espacios en blanco al final de la cadena<br>");
resultado18 = cadena10.trimEnd();
document.write(resultado18 + "<br><br>");

//trimStart() – elimina los espacios en blanco al comienzo de una cadena

document.write("<b>trimStart()</b> – elimina los espacios en blanco al comienzo de una cadena<br>");
resultado19 = cadena10.trimStart();
document.write(resultado19 + "<br><br>");

//valueOf() – retoma el valor primitivo de un objeto String


document.write(`<b>metodos de arrays <br>
                transformadores </b> <br><br>`);
// métodos de arrays
// transformadores

//pop() – elimina el ultimo elemento de un array y lo devuelve

document.write("<b>pop()</b>– elimina el ultimo elemento de un array y lo devuelve <br>");
let nombres = ["pedro", "maria", "jorge"];

document.write("Array original: <b>" + nombres + "</b><br>");
let result1 = nombres.pop();

document.write("Elemento removido: <b style='color:red'>" + result1 + "</b><br>");
document.write("Resultado: <b>" + nombres + "</b><br><br>");

//shift() – elimina el primer elemento de un array y lo devuelve

document.write("<b>shift()</b> – elimina el primer elemento de un array y lo devuelve <br>");
let nombres2 = ["pedro","maria","jorge"];

document.write("Array original: <b>" + nombres2 + "</b><br>");
let result2 = nombres2.shift();

document.write("Elemento removido: <b style='color:red'>" + result2 + "</b><br>");
document.write("Resultado: <b>" + nombres2 + "</b><br><br>");

//push() – agrega un elemento al array al final de la lista

document.write("<b>push()</b> – agrega un elemento al array al final de la lista<br>");
document.write(nombres + "<br>");
let result3 = nombres.push("daniel, malardo");
document.write(nombres + "<br>");

//reverse() – invierte el orden de los elementos de un array

document.write("<b>reverse()</b> – invierte el orden de los elementos de un array<br>");
let numeros = [1,2,3,4,5,6,7,8,9];

document.write(numeros + "<br>");
let result4 = numeros.reverse();
document.write(result4 + "<br><br>");

//unshift() – agrega uno o mas elementos al inicio del array y devuélvela nueva longitud del array

document.write("<b>unshift()</b> – agrega uno o mas elementos al inicio del array y devuélvela nueva longitud del array <br>");
document.write(numeros + "<br>");
let result5 = numeros.unshift(0,1,2,3);
document.write(result4 + "<br><br>");

//sort() – ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado

document.write("<b>sort()</b> – ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado <br>");
let numDesordenados = [2,3,6,1,4,6,17,8,5,4,31,3,4,6,67,34];
let nombresAleatorios = ["ziro","daniel","lilen","alejandro","jorge","carlos","kity"];

document.write(numDesordenados + "<br>");
let result6 = numDesordenados.sort();
document.write(result6 + "<br><br>");

document.write(nombresAleatorios + "<br>");
let result7 = nombresAleatorios.sort();
document.write(result7 + "<br><br>");

//splice() – cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

document.write("<b>splice()</b> – cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos<br>");
document.write(nombresAleatorios + "<br>");
let result8 = nombresAleatorios.splice(1,6,"roberto","terry","gustavo");
document.write(nombresAleatorios + "<br><br>");

// accesores

//join() – une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve

document.write("<b>join()</b> – une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve <br>");
let nombresAleatorios1 = ["ziro","daniel","lilen","alejandro","jorge","carlos","kity"];

document.write(nombresAleatorios1 + "<br>");
let result9 = nombresAleatorios1.join(" --- ");
document.write(result9 + "<br><br>");

//slice() – devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)

document.write("<b>slice()</b> – devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)<br>");
document.write(nombresAleatorios1 + "<br>");
let result10 = nombresAleatorios1.slice(0,-1);
document.write(result10 + "<br><br>");

// de repetición 
//filter() – crea un nuevo array con todos los elementos que cumplan la condición

document.write("<b>filter()</b> – crea un nuevo array con todos los elementos que cumplan la condición <br>");
let nombresAleatorios2 = ["ziro","daniel","lilen","alejandro","jorge","carlos","kity"];

nombresAleatorios2.filter(nombre=>document.write(nombre + "<br>"));

let result11 = nombresAleatorios2.filter(numero=> numero.length > 4);
 document.write(result11)

 //forEach() – ejecuta la función indicada una vez por cada elemento array

document.write("<b>forEach()</b> – ejecuta la función indicada una vez por cada elemento array<br>");
nombresAleatorios2.forEach(nombre=>document.write(nombre + "<br>"));

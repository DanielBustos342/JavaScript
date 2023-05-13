// objeto math – básico
// métodos
//sqrt() – devuelve la raíz cuadrada positiva de un numero

let numero = Math.sqrt(25);
document.write(numero + "<br><br>");

//cbrt() – devuelve la raíz cubica de un numero

let numero2 = Math.cbrt(27);
document.write(numero2 + "<br><br>");

//max() – devuelve el mayor cero o más números

let numero3 = Math.max(27,4,12,234,123,653,75,45,234);
document.write(numero3 + "<br><br>");

//min() – devuelve el más pequeño de cero o más números

let numero4 = Math.min(27,4,12,234,123,653,75,45,234);
document.write(numero4 + "<br><br>");

//random() – devuelve un numero pseudo-aleatorio entre 0 y 1

let numero5 = Math.random();
document.write(numero5 + "<br><br>");

//round() – devuelve el valor de un numero redondeado al número entero mas

let num = Math.random()*100;
num = Math.round(num);
document.write(num + "<br><br>");

//floor() - devuelve el mayor entero menor que o igual a un numero

for (var i = 0; i < 100; i++) {
	let num1 = Math.random()*99;
	num1 = Math.floor(num1+1);
document.write(num1 + "<br><br>");
}

//fround() – devuelve la representación flotante de precisión simple más cercana al numero

let numero6 = Math.fround(5.18795468748499999999999999);
document.write(numero6 + "<br><br>");

//trunc() – devuelve la parte entera del numero x, la eliminación de los dígitos fraccionarios 

let numero7 = Math.trunc(9.6);
document.write(numero7 + "<br><br>");

// •	PI

let numer = Math.PI;
document.write(numer + "<br><br>");
// •	SQRT1_2
let numer2 = Math.SQRT1_2;
document.write(numer2 + "<br><br>");

// •	SQRT2
let numer3 = Math.SQRT2;
document.write(numer3 + "<br><br>");


// •	E
let numer4 = Math.E;
document.write(numer4 + "<br><br>");
// •	LN2
let numer5 = Math.LN2;
document.write(numer5 + "<br><br>");
// •	LN10
let numer6 = Math.LN10;
document.write(numer6 + "<br><br>");
// •	LOG2E
let numer7 = Math.LOG2E;
document.write(numer7 + "<br><br>");
// •	LOG10E
let numer8 = Math.LOG10E;
document.write(numer8 + "<br><br>");

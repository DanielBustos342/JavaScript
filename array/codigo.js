let frutas = ["banana", " manzana", " pera"];

//document.write(frutas);

//array asociativos

let pc1 = {
	nombre: "PC de DaniB",
	procesador: "Intel core I3",
	ram: "16GB",
	disco: "240GB"
}

let pc2 = ["PC de DaniB", "Intel core I3", "16GB", "240GB"];

document.write(pc1["nombre"]); 
document.write(pc2[1]);
document.write(pc1["ram"]);
document.write(pc1);
document.write(pc2);

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let disco = pc1["disco"];

frase = `El nombre de mi PC es: ${nombre} <br>
		 El procesador es: ${procesador} <br>
		 La memoria RAM es: ${ram} <br>
		 El espacio en el disco es: ${disco}`;

document.write(frase);
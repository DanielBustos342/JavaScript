// la faculta de cofla esta por comenzar y ya las 12 materias de la carrera tiene asignado un profesor y todos los alumons que se anotaron en dicha clases,
// pero necesitamos ver esto mas ordenado
// 	crear soluciones:
// 	crea una funcion que al pasarle como parameto la materia nos devuelva:
// 			profesor asignado
// 			el nombre de todos los alumnos
// 	crea un funcion que nos diga en cuantas clases esta cofla
// 	nombrar las clases en las que esta y los profesores de cada cuantas
const materias = {
		fisica:["Perez","cofla","maria","carlos","juan"],
		Programacion:["Bustos","pedro","pepito","carlos","juan"],
		logica:["Laguna","pedro","pepito","cofla","maria","carlos","juan"],
		quimica:["Contreras","pedro","pepito","cofla","carlos","juan"]
	}

const obtenerInformacion = (materia)=>{
	
	if(materias[materia] !== undefined){
		return [materias[materia], materia,materias];
	}else{
		return materias;
	}
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);

	if(informacion !== false){
		let profesor = informacion[0][0];
		alumnos = informacion[0];
		alumnos.shift();
		document.write(`El profesor de <b>${informacion[1]}</b> es: <b style = "color:red"> ${profesor}</b><br>
		Los alumnos son: <b style="color:blue"> ${alumnos}</b><br><br>
		`);
	}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for(info in informacion){
		if(informacion[info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	}
	return `<b style="color:blue"> 
	${alumno} </b> esta en <b> ${cantidadTotal} clases: <b style="color:green"> ${clasesPresentes} </b>
	<br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("Programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("maria"));
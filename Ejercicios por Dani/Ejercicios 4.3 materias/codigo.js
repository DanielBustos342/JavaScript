// cofla ya vio las 12 materias y se decidio en cual se va a inscribir asi que en tres dias lo hara,
// el problema es que se rompio el sistema de inscripciones.
// 	crear soluciones:
// 	crear una funcion para preguntarle a cofla en que materia se quiere inscribir
// 	si ya hay 20 personas anotados en la materia negarle la inscripcion 
// 	si hay menos de 20 personas inscribir a cofla y añadirlo a la lista de personas

let materias = {
		fisica:["Perez","cofla","maria","carlos","juan"],
		Programacion:["Bustos","pedro","pepito","carlos","juan"],
		logica:["Laguna","pedro","pepito","cofla","maria","carlos","juan"],
		quimica:["Contreras","pedro","pepito","cofla","carlos","juan"]
	}

	const inscribir = (alumno,materia)=>{
		personas = materias[materia];
		if(personas.length >= 21){
			document.write(`lo siento <b>${alumno}<b/>, las clases de <b>${materia}</b> ya estan llenas <br><br>`);
		}else{
			personas.push(alumno)
			if(materia == "fisica"){
			 materias = {
				fisica:personas,
				Programacion:materias['Programacion'],
				logica:materias['logica'],
				quimica:materias['quimica']
			}
		}
		else if(materia == "Programacion"){
			 materias = {
				fisica:materias['fisica'],
				Programacion:personas,
				logica:materias['logica'],
				quimica:materias['quimica']
			}
		}
		else if(materia == "logica"){
			 materias = {
				fisica:materias['fisica'],
				Programacion:['Programacion'],
				logica:personas,
				quimica:materias['quimica']
			}
		}
		else if(materia == "quimica"){
			 materias = {
				fisica:materias['fisica'],
				Programacion:['Programacion'],
				logica:materias['logica'],
				quimica:personas
			}
		}
		document.write(`¡Felicidades ${alumno}! te has inscripto a ${materia} correctamente <br><br>`);
	}
}

document.write(materias['fisica'] + "<br>");
inscribir("cofla","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");


document.write("<br>" + materias['fisica']);
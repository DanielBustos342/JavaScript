// cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir..
// al otro dia comienzan las aclase de ciclo basico de la universidad (porque cofla quiere ser programador
// y se inscribio en la facultad de ingenieria para estudiar desarrollo de software)
// en este curso en total son 19 alumnos, pero surgio un problema que complico un poco a la facultad
// se rompio el sistema de registro de asistencias y durante los proximos 30 dias no se podran hacer registros de
// datos de ningun tipo, por ende las clases no podran comenzar hasta que esto este solucionado
//    crear mini-sistema que nos permita registrar los alumnos que esten presenten (P) y ausentes (A) en clases.
//    Pasados los 30 dias mostrar la situacion final de todos los amlunos (Nro total de presentes y ausentes)
//    se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta reprobado

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for(i = 0; i < cantidad; i++){
	alumnosTotales[i] = [prompt("Nombre del alumno" + (i + 1)),0];
}

const tomarAsistencia = (nombre, p)=>{
	let presencia = prompt(nombre);
	if(presencia == "p" || presencia == "P")
	alumnosTotales[p][1]++;
}

for(i = 0; i < 30; i++){
	for(alumno in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumno][0], alumno);
	}
}

for(alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}:<br>
	_____Presentes: <b> ${alumnosTotales[alumno][1]} </b> <br>
	_____Ausencias: <b> ${30 - alumnosTotales[alumno][1]} </b>`;
    if(30 - alumnosTotales[alumno][1] > 10){
	   resultado += "<b style = 'color:red'> Reprobado por inasistencias </b> <br> <br>";
    }else{
	resultado += "<br> <br>";
    }
    document.write(resultado);
}


// cofla esta sufriendo un poco ya que, a pesar de que cree contar con el 90% de asistencias
//  y tener un promedio mayor a 7/10, no cree entregar el 75% de trabajos practicos entregados ya 
//  que necesita dividir las tareasa que hara semanalmente, cofla debe, trabajar 8 horas por dia
// durante 2 semanas entre las cuales tiene que: 24 horas estudiar, 24 horas hacer trabajos
// practicos, 56 horas de trabajar 8 horas de hacer las cosas de la casa
// 	crear solucion
// 	organizar las actividades diariamente
// 	utilizar la consola para organizar todo
// 	el tiempo por tarea no deve superar las 4 horas

let tp = "100 minutos hacer trabajos prácticos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for(var i=0; i < 14; i++){
	if(i == 0){
		console.log("semana 1");
	}
console.groupCollapsed("dia " + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
	if(i == 7){
		console.groupEnd();
		console.groupCollapsed("semana 2");
	}
}

console.groupEnd();
console.groupEnd();
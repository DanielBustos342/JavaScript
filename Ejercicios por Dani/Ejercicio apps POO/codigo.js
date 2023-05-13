// cofla ya tiene su nuevo celular y ahora esta mirando las aplicaciones del play store ya que quiere jugar juegos que
// sean muy populares, que tengan buena puntuacion y que se pesen poco, pero las 7 apps que llamaron su atencion son un
// tanto similares y sabe que si se descarga todas, probablemente juegue con todas, pero el se va a descargar solo 2 para
// tener perdidas innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede decidirse
// cual de todas estas aplicaciones es la que va a descargar
// 	crear soluciones
// 	crear un sistema que ayude a cofla a decidir cual app descargargar
// 	la informacion de los instaladores debe contener la cantidad de descargas y la puntuacion y el peso
// 	las apps se deben poder instalar, abrir, cerrar y desintalar

class App{
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	abrir(){
		if(this.iniciada == false && this.instalada == true){
			this.iniciada = true;
			alert("app encendida");
		}
	}
	cerrar(){
		if(this.iniciada == true && this.instalada == true){
			this.iniciada = false;
			alert("app cerrada");
		}
	}
	instalar(){
		if(this.instalada == false){
			this.instalada = true;
			alert("app instalada correctamente");
		}
	}
	desinstalar(){
		if(this.instalada == true){
			this.instalada = false;
			alert("app desinstalada correctamente");
		}
	}
	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b><br>
		Puntuacion: <b>${this.puntuacion}</b><br>
		Peso: <b>${this.peso}</b><br>`
	}
}

app1 = new App("16.000","5 estrellas","1200mb");
app2 = new App("17.000","4 estrellas","900mb");
app3 = new App("11.000","5 estrellas","500mb");
app4 = new App("19.000","3 estrellas","700mb");
app5 = new App("6.000","2 estrellas","1000mb");
app6 = new App("25.000","3 estrellas","1500mb");
app7 = new App("9.000","5 estrellas","1300mb");

// app.instalar();
// app.abrir();
// app.cerrar();

document.write(`
	${app1.appInfo()}<br>
	${app2.appInfo()}<br>
	${app3.appInfo()}<br>
	${app4.appInfo()}<br>
	${app5.appInfo()}<br>
	${app6.appInfo()}<br>
	${app7.appInfo()}<br>`);
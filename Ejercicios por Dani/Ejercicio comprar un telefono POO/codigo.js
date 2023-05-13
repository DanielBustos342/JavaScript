// cofla entro a una tienda que vende celulares por que parecio bastante bueno coprarse un nuevo celular
// de todos los modelos que hay disponibles es esa tienda a cofla le llamaron la atencion 3 telefonos especificamente
// el problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada . . . pero claro
// el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahi
// entramos nosotros
//      crear soluciones
//      crear un sistema para mostrarle a cofla las particularidades de los 3 celulares
//      cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram  
//      cada celular debe podes prender, reiniciar,  apagar, tomar fotos y grabar


class Celular {
     constructor(color,peso,tamaño,rdc,ram){
     	this.color = color;
     	this.peso = peso;
     	this.tamaño = tamaño;
     	this.resolucionDeCamara = rdc;
     	this.memoriaRam = ram;
     	this.encendido = false;
     }
     presionarBotonDeEncendido(){
     	if(this.encendido == false){
     		alert("celular prendido");
     		this.encendido = true;
     	}else{
     		alert("celular apagado")
     		this.encendido = false;
     	}
     }
     reiniciar(){
     	if(this.encendido == true){
     		alert("reiniciando celular");
     	}else{
     		alert("el celular esta apagado");
     	}
     }
     tomarfoto(){
     	alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
     }
     grabarVideo(){
     	alert(`grabando video en ${this.resolucionDeCamara}`);
     }
     mobileInfo(){
     	return `
     	Color: <b>${this.color}</b><br>
     	Peso: <b>${this.peso}</b><br>
     	Tamaño: <b>${this.tamaño}</b><br>
     	Resolucion de camara: <b>${this.resolucionDeCamara}</b><br>
     	Memoria Ram: <b>${this.memoriaRam}</b><br>`;
     }

}

class celularAltagama extends Celular{
	constructor(color,peso,tamaño,rdc,ram,rdce){
		super(color,peso,tamaño,rdc,ram);
		this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideoLento(){
		alert("estas grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("vamos a iniciar un reconocimiento facial");
	}
	infoAltaGama(){
		return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
	}
}

celular1 = new Celular("rojo","150g","5'","HD","2GB");
celular2 = new Celular("negro","155g","5.4'","full HD","4GB");
celular3 = new Celular("blanco","200g","5.9'","4k","8GB");

// celular1.presionarBotonDeEncendido();
// celular1.tomarfoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonDeEncendido();

document.write(`
	${celular1.mobileInfo()} <br>
	${celular2.mobileInfo()} <br>
	${celular3.mobileInfo()} <br>`);


// cofla no esta satisfecho con los celulares asi que decide ir a la seccion de celulares de alta gama, donde va a poder
// encontrar los celulares mas caros del lugar, asi que al entrar vio dos celulares que le encantaron, estos 2 celulares de alta
// gama pueden hacer todo lo que podian hacer los 3 anteriores pero tienen mejores caracteristicas y ademas pueden grabar en
// camara super lenta, tienen reconocimiento facial y una camara extra
// 	crear soluciones
// 	implenetar todas estas cualidades en los celulares de alta gama

celular3 = new celularAltagama("gris","130g","6'","2K","6GB","HD");
celular4 = new celularAltagama("dorado","145g","6.5'","4K","8GB","Full HD");

document.write(`
	${celular3.infoAltaGama()} <br> <br>
	${celular4.infoAltaGama()} <br>`);
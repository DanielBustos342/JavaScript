// un joven muy afortunado logro ganar el primer premio de la loteria...
// exacto, estamos hablando del pobre al que cofla le dio una mano, este
// pobre decide hacer una fiesta para festejar que salio de la pobrza con este
// millonario compro una maquina que deja pasar solamente a los mayores de edad, entre otras cosas..este
// 	dejar pasar solo a los mayores de edad
// 	la primer persona que entre despues de las 2AM, no paga



let free = false;

const validarCliente = time=>{
	let edad = prompt("¿Cual es tu edad?");
	if(edad > 18){
		if(time >=2 && time < 7 && free == false){
			alert("podes pasar gratis, porque sos la primer persona despues de las 2AM");
			free = true;
		}else{
			alert(`son las ${time}:00HS y podes pasar, pero tenes que pagar la entrada`);
		}
	}else{
		alert("no puede ingresar, por ser menor de edad");
	}
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
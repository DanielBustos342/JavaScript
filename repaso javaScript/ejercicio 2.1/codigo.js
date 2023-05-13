let free = false;

const validarCliente = (time) =>{
	let edad = prompt("¿Cual es tu edad?");
	if(edad > 18){
		if(time >= 2 && time < 7 && free == false){
			alert("podes pasar gratis porque sos la primera persona despues de las 2AM")
			free = true;
		} else{
			alert(`Son las ${time}:00HS y podes pasar pero tenes que comprar la entrada`)
		}
	}else{
		alert("mira pa, sos menor de edad no tenes chance de pasar BRO");
	}	
}

validarCliente(23);
validarCliente(3);
validarCliente(5);
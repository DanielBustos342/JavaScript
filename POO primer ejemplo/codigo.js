class animal {
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>");
	}
}

//herencia

class Perro extends animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza;
	}
	ladrar(){
		alert("¡waou!");
	}
}

//getters y setters

class dog extends animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza;
	}
	set setRaza(newNome){
		this.raza = newNome;
	}
	get getRaza(){
		return this.raza;
	}
}




const perro = new dog("perro", 5 , "marron", "doberman");
const gato = new animal("gato", 3 , "negro");
const pajaro = new animal("pajarito", 1 , "gris");


perro.setRaza = "Pedro ";
document.write(perro.getRaza);

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(pajaro.info + "<br>");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
//dog.ladrar();
//gato.ladrar();

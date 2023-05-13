dineroCofla = prompt("¿Cuanto dinero tiene Cofla?");
dineroRoberto = prompt("¿Cuanto dinero tiene Roberto?");
dineroPedro = prompt("¿Cuanto dinero tiene Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if(dineroCofla >= 0.6 && dineroCofla < 1){
	alert(`Cofla, te alcanza para comprar el helado de agua y te sobran $${dineroCofla - 0.6} `);

}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
	alert(`Cofla, te alcanza para comprar el helado de crema y te sobran $${dineroCofla - 1.6}`);

}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
	alert(`Cofla, te alcanza para comparar el helado de heladix y te sobran $${dineroCofla -1.7}`);
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
	alert(`Cofla, te alcanza para comprar el helado de heladovich y te sobran $${dineroCofla - 1.8}`);
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
	alert(`Cofla, te alzanza para comprar el helado de helardo y te sobran $${dineroCofla -2.9}`);	
}
else if(dineroCofla >= 2.9){
	alert(`Cofla, te alcanza para comprar el helado con confites o el pote de 1/4 y te sobran $${dineroCofla - 2.9}`);
}else{
	alert(`Lo siento Cofla, pobre de mierda, no te alcanza para ningun helado`);
}


if(dineroRoberto >= 0.6 && dineroRoberto < 1){
	alert(`Roberto, te alcanza para comprar el helado de agua y te sobran $${dineroCofla - 0.6} `);

}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
	alert(`Roberto, te alcanza para comprar el helado de crema y te sobran $${dineroCofla - 1.6}`);

}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
	alert(`Roberto, te alcanza para comparar el helado de heladix y te sobran $${dineroCofla -1.7}`);
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
	alert(`Roberto, te alcanza para comprar el helado de heladovich y te sobran $${dineroCofla - 1.8}`);
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
	alert(`Roberto, te alzanza para comprar el helado de helardo y te sobran $${dineroCofla -2.9}`);	
}
else if(dineroRoberto >= 2.9){
	alert(`Roberto, te alcanza para comprar el helado con confites o el pote de 1/4 y te sobran $${dineroCofla - 2.9}`);
}else{
	alert(`Lo siento Roberto, pobre de mierda, no te alcanza para ningun helado`);
}

if(dineroPedro >= 0.6 && dineroPedro < 1){
	alert(`Cofla, te alcanza para comprar el helado de agua y te sobran $${dineroCofla - 0.6} `);

}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
	alert(`Pedro, te alcanza para comprar el helado de crema y te sobran $${dineroCofla - 1.6}`);

}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
	alert(`Pedro, te alcanza para comparar el helado de heladix y te sobran $${dineroCofla -1.7}`);
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
	alert(`Pedro, te alcanza para comprar el helado de heladovich y te sobran $${dineroCofla - 1.8}`);
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
	alert(`Pedro, te alzanza para comprar el helado de helardo y te sobran $${dineroCofla -2.9}`);	
}
else if(dineroPedro >= 2.9){
	alert(`Pedro, te alcanza para comprar el helado con confites o el pote de 1/4 y te sobran $${dineroCofla - 2.9}`);
}else{
	alert(`Lo siento Pedro, pobre de mierda, no te alcanza para ningun helado`);
}
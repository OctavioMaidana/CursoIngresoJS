function mostrar()
{
	var precioinicial;
	var descuento; 
	var precioFinal;

	precioinicial = prompt("Indique el precio");
	descuento = prompt ("Indique el descuento");

	precioFinal = precioinicial * descuento /100;

	

	 elPrecioFinal.value =  precioinicial - precioFinal;
    precioFinal = parseFloat(precioFinal);


}

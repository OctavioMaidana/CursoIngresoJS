/*  Octavio Maidana Div H Ejercicio 3 While
 al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while ( claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error reingrese el número clave.");

	}

	alert ("clave correcta");
	
}//FIN DE LA FUNCIÓN

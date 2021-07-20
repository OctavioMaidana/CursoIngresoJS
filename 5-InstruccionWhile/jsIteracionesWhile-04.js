/*  Octavio Maidana Div H Ejercicio 4 While
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");


	while ( numeroIngresado > 10 || numeroIngresado < 1) {

		numeroIngresado = prompt(" error ingrese un número entre 0 y 10.");


	}

	alert("muy bien");
	
}//FIN DE LA FUNCIÓN
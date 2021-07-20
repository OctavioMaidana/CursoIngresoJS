/*  Octavio Maidana Div H Ejercicio  5 While
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m") {

		sexoIngresado = prompt("Error ingrese f ó m .");
	}
 

    alert("muy bien");


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN
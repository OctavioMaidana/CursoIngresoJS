/* Octavio Maidana Div H Ejercicio 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var bandera;
	bandera = false;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=0;
	respuesta= true;

	while (respuesta == true) {
	numero = prompt ("ingrese un numero");
    numero = parseInt (numero);

	if (numero >= 0 ) { sumaPositivos += numero; }
	
	else {

		if (bandera ==false) 
		{
			multiplicacionNegativos = 1;
			bandera = true;
		}




	 multiplicacionNegativos *= numero;

	}




	                     

    respuesta = confirm ("numero correcto ingrese otro")

                      }

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
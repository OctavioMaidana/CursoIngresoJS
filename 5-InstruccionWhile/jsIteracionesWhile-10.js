/* Octavio Maidana Div H ejercicio 10 bis While
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
10 BIS - mostrar de todos los numeros el mayor y de los positivos el mas chico	 */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var contadorP;
	var contadorN;
	var contador0;
	var contadorPares;
	var bandera;
	var maximo;
	var minimo;
	maximo =0;
	minimo=0;
	bandera = false;
	contador0 = 0;
	contadorP = 0;
	contadorN=0;
	var sumaNegativos=0;
	var sumaPositivos=0;

	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado = prompt ("ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);

		if (bandera==false || numeroIngresado>maximo) 
		{
			maximo = numeroIngresado;

		}


		if ( numeroIngresado < 0 )
		{
			sumaNegativos-= numeroIngresado;
			contadorN++;
		}
		
		
		else 
		{

			if ( numeroIngresado == 0)
			{
				contador0++;

			}
			else 
			{
				sumaPositivos += numeroIngresado;
                contadorP++;

			}
           
		}

		if (numeroIngresado%2==0) 
		{
			contadorPares++;
		}

		if (bandera==false || numeroIngresado>maximo) 
		{
			maximo = numeroIngresado;
		}

		if (bandera==false|| numeroIngresado <minimo)
			{ minimo = numeroIngresado;
				bandera = true;}






		respuesta= confirm ("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :" + sumaNegativos + "<br>" + "y la cantidad  es " + contadorN +"<br>");
	document.write("la suma de positivos es :" + sumaPositivos + "<br>" + "y la cantidad  es " + contadorP + "<br>" );
	document.write("Promedio de negativos :" + sumaNegativos/contadorN + "<br>" 
		+ "promedio de positivos: " + sumaPositivos/contadorP + "<br>");
	document.write ("la suma de ceros es: " + contador0 + "<br>");
	document.write ("la diferencia entre positivos y negativos es: " + (sumaPositivos - sumaNegativos) + "<br>" );
	document.write ("el número máximo es: " + maximo + " y el numero mínimo es: " + minimo );
}//FIN DE LA FUNCIÓN
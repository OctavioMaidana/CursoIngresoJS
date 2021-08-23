/* Octavio Maidana Div H Ejercicio 09 While
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
 var numero;
 var maximo; 
 var minimo;
 var bandera;
 bandera=false; 
 var respuesta = true;


	while(respuesta== true)
	{
		numero = prompt ("ingrese numero");
		numero = parseInt (numero);


		if ( bandera == false || numero > maximo ) 
		{ 
       
       maximo = numero;
       alert ("maximo");
       //maximo = numero;
       //minimo = numero;

       //bandera = true;
		
		}

		if ( bandera == false || numero < minimo ) 
		{ 
       
       minimo = numero;
       alert ("minimo");
       bandera = true;
       

       //maximo = numero;
       //minimo = numero;

       //bandera = true;
		}

		//maximo = parseInt (maximo);
		//minimo = parseInt(minimo);
		
		respuesta = confirm ("desea continuar?");
	}
	alert ("el maximo es " + maximo + " y el minimo es " + minimo);

	//document-write("el maximo es " + maximo + "el minimo es " + minimo);
	txtIdMaximo.value=maximo;
	txtIdMinimo.value=minimo;
}//FIN DE LA FUNCIÓN
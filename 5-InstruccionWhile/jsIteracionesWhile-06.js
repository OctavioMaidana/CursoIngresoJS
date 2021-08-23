/* Octavio Maidana Div H Ejercicio 6 While
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/


 mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	
	

	contador=0;
	acumulador=0;


	while (contador<5) {

		numeroIngresado = prompt ( "Ingrese un número");
		numeroIngresado = parseInt (numeroIngresado);
		
		acumulador += numeroIngresado;
		//acumulador= acumulador + numeroIngresado;
		contador++; 
		//contador = contador +1;
		//contador += 1;
      


	}


   
	promedio = acumulador/contador;

	// ("la suma da " + acumulador);
	//alert (" y promedio " + promedio);



	
    txtIdPromedio.value = promedio;
	txtIdSuma.value=acumulador;
		

}//FIN DE LA FUNCIÓN txtIdPromedio
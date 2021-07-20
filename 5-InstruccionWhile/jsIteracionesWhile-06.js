function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var suma;
	var promedio;
	suma = parseInt(suma);
	numeroIngresado = parseInt (numeroIngresado);
	

	contador=0;
	acumulador=0;
	suma=0;

	while (contador<5) {

		numeroIngresado = prompt ( "Ingrese un número");
		
		suma += numeroIngresado;
		acumulador= acumulador+numeroIngresado;
		//suma= suma + numeroIngresado;
		contador++; 
       txtIdPromedio.valiu = suma/contador;


	}



	promedio = acumulador/contador;

	alert ("suma" + promedio);


	
	
	txtIdSuma.value=acumulador;
		

}//FIN DE LA FUNCIÓN txtIdPromedio
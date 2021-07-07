/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var resta;

	importe = txtIdImporte.value;
	importe = parseFloat(importe);
	resultado  = txtIdResultado.value;
	resultado = parseFloat(resultado);
	resta = importe * 25 / 100;
	resultado =  importe - resta;
    
    txtIdResultado.value = resultado;


	alert("El resultado es " + resultado);
}

/*
txtIdImporte
txtIdResultado
*/
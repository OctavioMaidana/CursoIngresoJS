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
	var descuentoingresado;


	descuentoingresado = prompt ("Ingrese su descuento");


	importe = txtIdImporte.value;
	importe = parseFloat(importe);
	resultado  = txtIdResultado.value;
	resultado = parseFloat(resultado);
	resta = importe * descuentoingresado / 100;
	resultado =  importe - resta;
    
    txtIdResultado.value = resultado;


	alert("El resultado es " + resultado);
}

/*
txtIdImporte
txtIdResultado
 Ejercicios: 1 - 10 + 10 BIS
- Parcial 2019: 1-2-3
- Parcial 2018: 1-2-3
- Recu Parcial 2018: 1-2-3
- TPS: 1-2-3
*/
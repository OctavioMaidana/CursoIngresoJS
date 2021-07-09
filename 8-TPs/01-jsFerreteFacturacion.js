/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	precio1 = txtIdPrecioUno.value;
	precio1 = parseFloat(precio1);
	var precio2; 
	precio2 = txtIdPrecioDos.value;
	precio2 = parseFloat(precio2);
	var precio3;
	precio3 = txtIdPrecioTres.value;
	precio3 = parseFloat(precio3);
	var resultado; 

    resultado = precio1 + precio2 + precio3;

	alert  ("el precio es  " + resultado) ;

	/*
	txtIdPrecioUno
	txtIdPrecioDos
	txtIdPrecioTres

	*/
	
}
function Promedio () 
{
	var precio1;
	precio1 = txtIdPrecioUno.value;
	precio1 = parseFloat(precio1);
	var precio2; 
	precio2 = txtIdPrecioDos.value;
	precio2 = parseFloat(precio2);
	var precio3;
	precio3 = txtIdPrecioTres.value;
	precio3 = parseFloat(precio3);
	var resultado; 

    resultado = (precio1 + precio2 + precio3) / 3;

	alert  ("el promedio es  " + resultado) ;
}
function PrecioFinal () 
{

	var precio1;
	precio1 = txtIdPrecioUno.value;
	precio1 = parseFloat(precio1);
	var precio2; 
	precio2 = txtIdPrecioDos.value;
	precio2 = parseFloat(precio2);
	var precio3;
	precio3 = txtIdPrecioTres.value;
	precio3 = parseFloat(precio3);
	var resultado; 
	var iva; 
	var preciofinal;
	

    resultado = (precio1 + precio2 + precio3);
    iva = resultado * 21 / 100;
    preciofinal = resultado + iva;
    


	alert  ("el precio final es  " + preciofinal ) ;
}
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;
	numero = parseInt (numero);
	contador=0;
	acumulador=0;
	respuesta= 's';
   
   
    
    while (respuesta == 's') {

     
    
     numero = prompt ("ingrese un numero");

     acumulador = acumulador + numero; 

     contador++;
     
    respuesta = prompt ("numero ingresado correctamente ¿quiere ingresar otro número")

    }

    promedio = acumulador/contador;
    alert ("bien hecho" + contador);


	acumulador = txtIdSuma.value;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN
/* Octavio Maidana Div H Ejercicio 7 While
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
	contador=0;
	acumulador=0;
	//respuesta= 's';
	respuesta = true;
   
   
    
    while (respuesta == true) {

     
    
     numero = prompt ("ingrese un numero");
     numero = parseInt (numero);
     while (numero < 0 || numero > 100)
     {
     	numero = prompt ("numero erroneo ingrese un numero de 1 a 100");
     	numero = parseInt (numero);
     }

     acumulador +=  numero; 

     contador++;
     
    //respuesta = prompt ("numero ingresado correctamente ¿quiere ingresar otro número")
    respuesta = confirm ("Numero ingresado correctamente ingrese otro")

    }

   
    alert ("bien hecho sumaste " + acumulador  );


	txtIdSuma.value = acumulador;
	txtIdPromedio.value=  acumulador/contador;

}//FIN DE LA FUNCIÓN
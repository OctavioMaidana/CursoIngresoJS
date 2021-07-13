/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
var temperatura;
var centigrados;
temperatura = txtIdTemperatura.value;
temperatura = parseFloat(temperatura);
centigrados = (temperatura - 32) / 1.8;



alert( temperatura + "  Farenheit corresponden a " + centigrados + " grados centigrados");


}

function CentigradosFahrenheit () 
{
	var temperatura;
	var farenheit;
     
    temperatura = txtIdTemperatura.value;
    temperatura = parseFloat(temperatura);

	farenheit = temperatura * 1.8 + 32;

	
alert( temperatura + "  grados centigrados corresponden a " + farenheit + " grados farenheit");

	
}
//txtIdTemperatura
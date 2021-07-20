/* Octavio Maidana Div H Ejercicio 04 Switch
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	var mes
	mes = txtIdMes.value;
	alert(mes);

switch (mes) {

case "Enero" :
case "Marzo" :
case "Mayo" :
case "Julio" :
case "Agosto" :
case "Septiembre" :
case "Octubre" :
case "Noviembre":
case "Diciembre":

alert ("este mes tiene 31 días");

break;	
	
case "Febrero" :
alert ("este mes tiene 28 días");
break;
default:
alert("este mes tiene 30 días");
break; 


}









/*
	switch (mes) {

		case "Enero" :
		alert ("este mes tiene 31 días");
		break;

		case "Febrero" :
		alert ("este mes tiene 28 días");
		break;

		case "Marzo" :
        alert ("este mes tiene 31 días");
		break;
		case "Abril" :
		break;
		case "Mayo" :
		alert ("este mes tiene 31 días");
		break;
		case "Junio" :
		break;
		case "Julio" :
		case "Agosto" :
		alert ("este mes tiene 31 días");
        break; 
		case "Septiembre" :
		case "Octubre" :
		alert ("este mes tiene 31 días");
        break; 
		case "Noviembre":
		case "Diciembre":
		alert ("este mes tiene 31 días");
        break; 

		}
	
	*/



}//FIN DE LA FUNCIÓN
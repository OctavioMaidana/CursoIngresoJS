
/* Octavio Maidana Div H Ejercicio 02 Switch
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	var mes
	mes = txtIdMes.value;
	alert(mes);

	switch (mes) {

		case "Enero" :
		case "Febrero" :
		case "Marzo" :
		case "Abril" :

		alert ("Falta para el invierno");
		
		break;

		case "Mayo" :
		case "Junio" :

		alert ("Se viene el invierno"); 

		break;

		case "Julio" :
		case "Agosto" :
		alert ("Abrigate");
		break;

		default : 
		alert("se fue el frio");
		break;

	}




}//FIN DE LA FUNCIÓN
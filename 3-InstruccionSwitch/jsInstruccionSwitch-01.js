/* Octavio Maidana Div H Ejercicio 01 Switch
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	//tomo el mes
	
	var mes
	mes = txtIdMes.value;
	alert(mes);

	switch (mes) {

		case "Enero" :
		alert ("que comiences bien el año");
		break;

		case "Marzo" :
		alert ("A clases");
		break;

		case "Marzo" :
		alert (" se vienen las vacaciones");
		break;

		case "Diciembre" :
		alert ("felices fiestas");
		break;
		

	}



}//FIN DE LA FUNCIÓN
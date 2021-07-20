/* Octavio Maidana Div H Ejercicio 03 Switch
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	var mes
	mes = txtIdMes.value;
	alert(mes);

	switch (mes) {

		case "Enero" :
		alert ("este mes tiene 30 días");
		break;

		case "Febrero" :
		alert ("este mes tiene 28 días");
		break;

		default:

		alert ("este mes tiene 30 días");

		break;
		
	}


}//FIN DE LA FUNCIÓN
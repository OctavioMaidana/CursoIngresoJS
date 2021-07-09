/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Porcentaje lo ingresa el usuario.
*/
function mostrarAumento()
{
var sueldo;
var aumento;
var resultado;
sueldo = txtIdSueldo.value;
sueldo = parseFloat (sueldo);
resultado = txtIdResultado.value;
resultado = parseFloat(resultado); 
aumento = sueldo * 10 / 100;
resultado =sueldo + aumento;
txtIdResultado.value = resultado;

	alert("Su aumento es " + aumento);
}
/*
txtIdSueldo
txtIdResultado
*/
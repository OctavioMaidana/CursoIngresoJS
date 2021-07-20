function mostrar()
{
	var edad;
var civil;


edad = txtIdEdad.value;
edad = parseInt (edad); 
civil = estadoCivil.value;


if  (civil == "Soltero" || !(edad >= 18))
  {
alert("es solero y es menor");
}

else {
	alert ("esto esta ok")
}//FIN DE LA FUNCIÓN
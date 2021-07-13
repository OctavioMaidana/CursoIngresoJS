function mostrar()
{

var edad;
var civil;


edad = txtIdEdad.value;
edad = parseInt (edad); 
civil = estadoCivil.value;


if  (edad <18 && civil != "Soltero")
  {
alert("muy joven para no ser soltero");
}

else {
	alert ("esto esta ok")
}

	


}//FIN DE LA FUNCIÓN

/*
txtIdEdad
estadoCivil

*/
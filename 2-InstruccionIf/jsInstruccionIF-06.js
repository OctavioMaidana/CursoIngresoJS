function mostrar()
{
	  
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt (edad);

	alert("tu edad es " + edad);

	if ( edad <13   ) { 
		alert("niño");
	
}
else { 

if     (edad > 13  &&  edad <= 19 )
{

	alert ( "adolecente");
 
 }
else 
{
	alert ("adulto")

}
}




}//FIN DE LA FUNCIÓN
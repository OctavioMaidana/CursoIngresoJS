function mostrar()
{
	var nota;
	var maximo;
	var minimo;

	maximo = 10;
	minimo = 1; 
	nota = Math.round (Math.random()  * (maximo - minimo) + minimo );

	alert("La nota es " + nota);


	if  ( nota >= 9)  {
alert("Excelente");

}

else { 

if     (nota > 4 )
{

	alert ( "Aprobado");
 
 }
else 
{
	alert ("Vamos que la proxima se puede")

}
}


}//FIN DE LA FUNCIÓN

         
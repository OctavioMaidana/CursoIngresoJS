function mostrar()
{
  var pareja1;
  var pareja2; 
  var peso1;
  var peso2;
  var pesototal;
  var promedio;

  pareja1 = prompt ("ingrese su nombre");
  pareja2 = prompt ("ingrese su nombre");

peso1 = prompt("ingrese su peso");
peso2 = prompt("ingrese su peso");

peso1 = parseInt(peso1);
peso2 = parseInt(peso2);

pesototal = peso1+peso2;

promedio = pesototal/2;

alert("ustedes se llaman "+ pareja1 + " y " + pareja2);
alert ("juntos promedian un peso de " + promedio);


}

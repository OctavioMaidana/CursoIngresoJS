/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
 var continuar = true;
 var materiales;
 var bolsas;
 var precioBolsa;
 var totalApagar;
 var descuento;
 var tipoMasBolsas;
 var tipoMayor;
 var masCaro;
 var tipoMasCaro;

 var banderaCara = false;
 var banderaBolsas = false;

 while (continuar)
 
 {
 	materiales = prompt ("ingrese el material que desea comprar");
 	while (materiales != "arena" && materiales != "cal" && materiales != "cemento")
 		{ materiales = prompt ("Error: los materiales deben ser: Cal, Arena o Cemento");}
   bolsas = parseInt ( prompt ("ingrese la cantidad de bolsas que desea comprar"));
   precioBolsa = parseInt (prompt("Ingrese el precio por  cada bolsa"));
   while (precioBolsa < 0) { precioBolsa = parseInt (prompt("Error: El precio debe ser mayor a 0")); }

if (bolsas > 30) { descuento = precioBolsa * 0.25;
                     totalApagar = precioBolsa - descuento; }
                     else {
                     	 if (bolsas > 10) {descuento = precioBolsa * 0.15;
                     	                    totalApagar = precioBolsa - descuento;       }

                     	                    
                     	                    totalApagar = precioBolsa 
                     }

if (bolsas > tipoMasBolsas || banderaBolsas == false)
	{  tipoMasBolsas = bolsas;
	    tipoMayor = materiales;
	    banderaBolsas = true;       }

if (precioBolsa > tipoMasCaro || banderaCara == false) 
	{ tipoMasCaro = precioBolsa;
	   tipoMayor = materiales;
	   banderaCara = true;  }


continuar = confirm ("¿Desea ingresar más productos");
 }

alert ("el importe total a pagar es " + precioBolsa*bolsas);
alert ("el importe con descuento es " + totalApagar * bolsas);
alert ("el tipo con mas cantidad de bolsas es " + tipoMayor );
alert ("El tipo mas caro es " + tipoMayor );


}

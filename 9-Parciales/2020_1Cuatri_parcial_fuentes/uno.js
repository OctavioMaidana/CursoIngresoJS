/* Octavio Maidana Div H Parcial 2020
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{ 
	
 var Productos = 0;
 var tipo;
 var precio;
 var unidades;
 var marca;
 var fabricante;
 var unidadesA=0;
 var alcoholBerreta;
 var FalcoholBerreta;
 var acumuladorJabon = 0;
 var masUnidades;
 var promedio;
 var precioMuni;

 var banderaAlcholica = false;
 var banderaUnidades = false;


 while ( Productos < 2) {

tipo = prompt ("ingrese producto: barbijo, alcohol o jabón");

       while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" )
       {    tipo = prompt ("error el producto ingresado no corresponde a jabon, alcohol o barbijo");    }
precio = parseInt ( prompt("ingrese el precio"));
       
       while ( isNaN (precio) || precio <100 || precio > 300) 
       { precio = parseInt (prompt ("error: El precio no puede ser menor a 100, ni mayor a 300"))}
 
 unidades = parseInt( prompt ("ingrese la cantidad de unidades"));

       while ( isNaN (unidades) || unidades <0 || unidades > 1000) 
       { unidades = parseInt( prompt ("error: El precio no puede ser menor a 100, ni mayor a 300"))}

   marca = prompt ("ingrese la marca");
   fabricante = prompt ("ingrese fabricante");

   if (unidades > masUnidades || banderaUnidades == false)
   {   masUnidades = unidades;  
    precioMuni = precio;        }

   switch (tipo) 
   { case "alcohol" :

   if (precio > alcoholBerreta || banderaAlcholica == false)
   {

    alcoholBerreta = precio;
    FalcoholBerreta = fabricante;
   	unidadesA += unidades;
   	banderaAlcholica = true;
   }

   break;

   case "jabon" : 
   acumuladorJabon += unidades;
   break;



   }

   Productos++;








 }
	promedio = precioMuni/masUnidades;

	document.write ("Del más barato de los alcohol el fabricante es " + FalcoholBerreta + " y las unidades " + unidades + "<br>" );
	document.write ( "El precio con más unidades el promedio es " + promedio + "<br>");
	document.write ( "El total de unidades de jabon es " + acumuladorJabon + "<br>");
}

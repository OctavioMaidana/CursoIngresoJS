function mostrar()
{

var precio;
var descuento;
var preciototal;

precio = prompt("ingrese el precio");
descuento = prompt ("ingrese porcentaje de descuento");

preciototal = precio * descuento / 100;

elPrecioFinal.value = preciototal;
preciototal = parseInt(preciototal);

alert("El precio total es" + preciototal);

}
// elPrecioFinal
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var largo;
var ancho;

var totaldealambre;

largo = txtIdLargo.value;
ancho = txtIdAncho.value;
radio = txtIdRadio.value;

largo = parseFloat(largo);
ancho = parseFloat(ancho);
radio = parseFloat(radio);


totaldealambre = largo * 2 + ancho * 2

alert ("la cantidad de alambre es " + totaldealambre*3);

}
function Circulo () 
{

var radio;
var totaldealambre;
const PI = 3.14;
radio = txtIdRadio.value;

totaldealambre = PI * radio * radio;

alert ("la cantidad de alambre es " + totaldealambre*3);
	
}
function Materiales () 
{

var largo;
var ancho;
var superficie;
var cemento;
var cal;


largo = txtIdLargo.value;
ancho = txtIdAncho.value;
largo = parseFloat(largo);
ancho = parseFloat(ancho);

superficie = largo * ancho;

cemento = superficie *2;
cal = superficie *3;

alert ("se necesitan "+ cemento + " bolsas de cemento y " + cal + " bolsas de cal");



}

/*
txtIdLargo
txtIdAncho
txtIdRadio
*/
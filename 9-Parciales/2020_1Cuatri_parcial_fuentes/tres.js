/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/


function mostrar()
{

var nombre;
var edad; 
var sexo;
var estadoCivil;
var temperatura;
var continuar = true;
var mayorTemperatura;
var nombreCaliente;
var contMayoresV = 0;
var contHsolyviu = 0;
var contViejosCalientes =0;
var contHombres = 0;
var acumuladorEdadH = 0;
var promedioEdad;

var banderaTemperatura = false;

while (continuar) 
{

	nombre = prompt ("ingrese su nombre");
	edad = parseInt (prompt("ingrese su edad"));
		while (isNaN (edad) || edad < 8 || edad > 120) 
			{ edad = parseInt (prompt ("la edad ingresada es incorreca, ingrese nuevamente"));}

	sexo = prompt ("ingrese sexo con la letra m de masculino o f de femenino");
	while (sexo != 'f' && sexo != 'm') {sexo = prompt ("el sexo ingresado es incorrecto ingrese las letras m o f");}
    estadoCivil = prompt ("ingrese su estado civil");
    while (estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo")
          {estadoCivil = prompt ("error: el estado civil debe ser: casado, soltero o viudo") }
    temperatura = parseInt (prompt ("cual fue su temperatura al ingresar al avion"));
    while (isNaN (temperatura) || temperatura < 32 || temperatura > 45) 
                 { temperatura = parseInt (prompt("error: ingrese nuevamente su temperatura"));}

 if (temperatura > mayorTemperatura || banderaTemperatura == false)
        { mayorTemperatura = temperatura;
          nombreCaliente  = nombre;    }

  if (sexo == 'm' && (estadoCivil == "soltero" || estadoCivil == "viudo"))
  	    { contHsolyviu++;  }

if (edad > 60 && temperatura > 38)
    {contViejosCalientes++;}

switch (estadoCivil)
{
 case "viudo" :
 if (edad > 21)
 {  contMayoresV++;   }

 break;
 case "soltero" :
 if (sexo == 'm')
    {  contHombres++;
       acumuladorEdadH += edad; 
                                  }
 break;

}
continuar = confirm ("Desea continuar");
}

promedioEdad = acumuladorEdadH/contHombres;

document.write ("el nombre de la persona con mas temperatura es  "+ nombreCaliente + "con " + mayorTemperatura + "grados"+ "<br>");
document.write ("la cantidad de hombres solteros y viudos es " + contHsolyviu + "<br>");
document.write ("la cantidad de personas de tercera edad con fiebre es de " + contViejosCalientes + "<br>");
document.write ("el promedio de edad de hombres solteros es de "  + promedioEdad);

}

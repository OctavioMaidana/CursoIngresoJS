/* Octavio Maidana Div H TP N 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	//edadIngresada = 0;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldo;
 	var legajo;
 	var nacionalidad;
 	
 	
 	//nombre = prompt ("ingrese su nombre");

 	//alert ("su nombre es " + nombre);

  
    edadIngresada = prompt ("ingrese su edad");
    

while (edadIngresada < 18 || edadIngresada > 90) 

{ 
  
   edadIngresada = prompt ("error la edad ingresada es incorrecta vuelva a ingresarla");
}

alert("la edad ingresada es correcta");
 txtIdEdad.value = edadIngresada;

 sexoIngresado = prompt ("Ingrese su sexo con las letras m, f, o nb");

 while (sexoIngresado != 'm' && sexoIngresado != 'f' && sexoIngresado != "nb") 

{ 
  

   sexoIngresado = prompt ("error el sexo ingrese sexo con las letras m o f");

   
}
 if (sexoIngresado=='m') 
   {

   	sexoIngresado = "Masculino";

   }
       else { if (sexoIngresado = "nb") 
   	          {
   	             sexoIngresado = "No binarie";
   	           }
   else 	{sexoIngresado = "Femenino";}
          }

alert("el sexo ingresado es correcto");
 txtIdSexo.value = sexoIngresado;

 estadoCivilIngresado = prompt ("Ingrese su Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 estadoCivilIngresado = parseInt (estadoCivilIngresado);
 while (estadoCivilIngresado < 0 || estadoCivilIngresado >4) 
 {
 	estadoCivilIngresado = prompt ("Error fatal: intentalo de nuevo");
 	estadoCivilIngresado = parseInt (estadoCivilIngresado);
 }


 
switch (estadoCivilIngresado) 
   {
   	case 1 : 
   	estadoCivilIngresado = "Soltero"; 
   	break;
   	case 2 : 
   	estadoCivilIngresado = "Casado";
   	break;
   	case 3 : 
   	estadoCivilIngresado = "Divorciado";
   	break;
   	case 4 : 
   	estadoCivilIngresado = "Viudo";
   	break;
   	
    
   }




alert("el estado civil ingresado es " + estadoCivilIngresado);
 txtIdEstadoCivil.value = estadoCivilIngresado;

sueldo = prompt ("ingrese su sueldo");
//sueldo = parseInt (sueldo);

while (sueldo < 8000) 

{
sueldo = prompt ("Error: el sueldo no puede ser menor a 8000");
}
txtIdSueldo.value = sueldo;

legajo = prompt ("Ingrese su legajo");
//legajo = parseInt (legajo);

while ( legajo < 1100 || legajo > 10000)
{
	legajo = prompt ("Error: Recuerde que el legajo debe tener 4 numeros sin ceros a la izquierda");

}

txtIdLegajo.value = legajo;

nacionalidad = prompt("ingrese su nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. ")

while (nacionalidad != 'a' && nacionalidad != 'e' && nacionalidad != 'n') 
{
  alert ("error fatal: vuelva a intentarlo");
  nacionalidad = prompt("ingrese su nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. ")
}
if (nacionalidad == 'a') 

{ nacionalidad = "Argenina"; }
  
   else {  
   	      if (nacionalidad=='e') { nacionalidad = "Extranjera"; }
   	      else {	nacionalidad = "Nacionalizado"; }

        }


txtIdNacionalidad.value = nacionalidad;
}



 
 



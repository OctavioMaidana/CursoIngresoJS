/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var precio;
	precio = 35;
	var lamparitas;
	var descuento;
	var lamparita;
	var marca;
	var precioFinal;
	var ingresosBrutos

	descuento = txtIdprecioDescuento.value;
	descuento = parseFloat (descuento);
	marca = Marca.value ; 



	lamparitas = txtIdCantidad.value; 	
	lamparitas = parseFloat (lamparitas);

	if (lamparitas >=6) {

		descuento = precio * lamparitas  /2;

		alert("el precio es " + descuento); }

		else {


			if (lamparitas ==5 && marca == "ArgentinaLuz" ) {
				descuento = precio * (lamparitas*40/100);

				alert ("el precio es" + descuento);  }

				else {  descuento = precio * (lamparitas*30/100);
			           alert ("el precio es " + descuento);  }

		


		}
               
	}


/*
*/
  
/*
function CalcularPrecio () 
{
  var precio_des;
  const precio = 35;
  var  marcas;
  var  cant;
  var impuesto;
  var mensaje;
   
   /*-----------------------*/
  
  /* marcas = document.getElementById("Marca").value ;
    
   cant = parseInt( document.getElementById("txtIdCantidad").value ) ;

  /*-------------- CANTIDAD 6 ---------------*/ 
 
 /* if(cant >= 6 )
      {
      
        precio_des = ( precio - ( precio * 0.50 ) ) ;
                  }
  

  /*-------------- CANTIDAD 5-----------------*/
/*if(cant == 5 ){
      
     if ( marcas =="ArgentinaLuz" )
          {

            precio_des = ( precio - ( precio * 0.40 ) ) ; };
 
        if ( marcas != "ArgentinaLuz" ) { 

            precio_des = ( precio - ( precio * 0.30 ) ) ; };

                  }
   
  /*--------------- CANTIDAD 4------------------*/
/*if (cant == 4)
        {
      
        if ( marcas == "ArgentinaLuz" || marcas == "FelipeLamparas")
              { 
                precio_des = ( precio - ( precio * 0.25 ) ) ;}
        
        if ( marcas != "ArgentinaLuz" && marcas != "FelipeLamparas")
              {
                precio_des = ( precio - ( precio * 0.20 ) ) ;}
            }

  /*---------------- CANTIDAD 3 -----------------*/
  /*  if (cant == 3 )
          {
 
           if ( marcas == "ArgentinaLuz" )       
                { precio_des = ( precio - ( precio * 0.15 ) );}

           if ( marcas == "FelipeLamparas" )       
                { precio_des = ( precio - ( precio * 0.10 ) );}

           if ( marcas != "ArgentinaLuz" || "FelipeLamparas" )       
                { precio_des = ( precio - ( precio * 0.05 ) );}

           }

       /*-------- CANTIDAD MENOR A 3 ------------*/
    /*   if (cant<3)
          {
            precio_des = precio ; 
                     }
        
       /*---------- RESULTADO ------------*/
        
       //  precio_des = precio_des * cant ;

       /*------- RESULTADO MAYOR A 120 ---------------*/
     /*   if (precio_des>120) 
            {
              impuesto = precio_des * 0.10 ;     
                precio_des = precio_des + impuesto ;  
                 mensaje = " Usted pagó $ " + precio_des ;
                  mensaje = mensaje + " Siendo el impuesto que usted pago $ " + impuesto ;
               
               alert(mensaje);

                } 
 
/*-------- ENVIO --------------*/
    //    document.getElementById("txtIdprecioDescuento").value = precio_des ;
/*

txtIdprecioDescuento
txtIdprecioDescuento
*/

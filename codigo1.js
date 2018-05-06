//var z;
//for ( var i=0; i<10; i++)
//{
//z = aleatorio(10, 20);
//document.write(z + " , ");
//}
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}


fondo.imagen = new Image();//crear objetos
fondo.imagen.src = fondo.url; //img en html tiene una etiqueta src, cargar la fuente a mi mapa debo pasar mi url por src
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
fondo.cargaOK = true;
 dibujar();
}

function cargarVacas()
{
vaca.cargaOK = true;
dibujar();
}

function cargarPollos()
{
pollo.cargaOK = true;
dibujar();
}

function cargarCerdos()
{
cerdo.cargaOK = true;
dibujar();
}

function dibujar()
{
if (fondo.cargaOK)
{
  papel.drawImage(fondo.imagen, 0, 0);
}
if (vaca.cargaOK)
{
  var cantidad = aleatorio(0, 10);
  for (var i = 0; i < cantidad; i++)
  {
   var x = aleatorio(0, 6);
   var y = aleatorio(0, 6);
   var x = x * 60;
   var y = y * 60;
  papel.drawImage(vaca.imagen, x, y);
  }
}
if (pollo.cargaOK)
{
  var cantidad = aleatorio(0, 10);
  for (var i = 0; i < cantidad; i++)
  {
   var x = aleatorio(0, 6);
   var y = aleatorio(0, 6);
   var x = x * 60;
   var y = y * 60;
  papel.drawImage(pollo.imagen, x, y);
  }}
if (cerdo.cargaOK)
{
  var cantidad = aleatorio(0, 10);
  console.log(cantidad);
  for (var i = 0; i < cantidad; i++)
  {
   var x = aleatorio(0, 6);
   var y = aleatorio(0, 6);
   var x = x * 60;
   var y = y * 60;
  papel.drawImage(cerdo.imagen, x, y);
}}
}
function aleatorio(min, maxi)//funcion
{
  var resultado;//funcion que retorne un valor, existe unicamente dentro de las llaves afuera no
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;//ecuacion
  return resultado;//instruccion para retornar a la linea de codigo que invoco la funcion aleatorio el valor
}

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdoo);

var xCerdoo = 150;
var yCerdoo = 100;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverCerdoo(e)
{
	var movimiento = 64;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(e.keyCode)
	{
		case teclas.LEFT:
			xCerdoo = xCerdoo - movimiento;
			dibujar(xCerdoo, yCerdoo);
		break;
		case teclas.UP:
			yCerdoo = yCerdoo - movimiento;
			dibujar(xCerdoo, yCerdoo);
		break;
		case teclas.RIGHT:
			xCerdoo = xCerdoo + movimiento;
			dibujar(xCerdoo, yCerdoo);
		break;
		case teclas.DOWN:
			yCerdoo = yCerdoo + movimiento;
			dibujar(xCerdoo, yCerdoo);
		break;
	}
}

var fondo =
{
	url: "tile.png",
	carga: false
}

var cerdoo =
{
	url: "cerdoo.png",
	carga: false
}

var vaca =
{
	url: "vaca.png",
	carga: false
}

var pollo =
{
	url: "pollo.png",
	carga: false
}

var cerdo =
{
	url: "cerdo.png",
	carga: false
}

cerdoo.imagen = new Image();
cerdoo.imagen.src = cerdoo.url;
cerdoo.imagen.addEventListener("load", cargaCerdoo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargaFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargaVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargaPollo);

function cargaCerdoo()
{
	cerdoo.carga = true;
	dibujar();
}

function cargaFondo()
{
	fondo.carga = true;
	dibujar();
}

function cargaPollo()
{
	pollo.carga = true;
	mantenerPosicion();
}

function cargaCerdo()
{
	cerdo.carga = true;
	mantenerPosicion();
}

function cargaVaca()
{
	vaca.carga = true;
	mantenerPosicion();
}

function mantenerPosicion()
{
	if(vaca.carga)
	{
		var cantidad = aleatorio(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xVaca[i] = x;
			yVaca[i] = y;
		}
	}
	if(cerdo.carga)
	{
		var cantidad = aleatorio(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xCerdo[i] = x;
			yCerdo[i] = y;
		}
	}
	if(pollo.carga)
	{
		var cantidad = aleatorio(1, 10);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xPollo[i] = x;
			yPollo[i] = y;
		}
	}
	dibujar();
}

function dibujar()
{
	if(fondo.carga)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
		}
	}
	if(cerdo.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
		}
	}
	if(pollo.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
		}
	}
	if(cerdoo.carga)
	{
		papel.drawImage(cerdoo.imagen, xCerdoo, yCerdoo)
	}
}

function aleatorio(max, min)
{
	var numero_aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
	return numero_aleatorio;
}

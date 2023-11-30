var formulario = document.querySelector(".formulario") //se cambio("#form") por (".formulario")

formulario.onsubmit = function(e) {

  e.prevent();
  
  var nombreFormulario = formulario.elements[0]; //se agrega (;) y se cambia el nombre de la variable para que sea mas claro
  var edadFormulario = formulario.elements[1]; //se agrega (;) y se cambia el nombre de la variable para que sea mas claro
  var nacionalidadFormlario = formulario.elements[2]; //se agrega (;) y se cambia el nombre de la variable para que sea mas claro

  var nombre = nombreFormulario.value; //se agrega (;)
  var edad = edadFormulario.value; //se agrega (;)

  var i = nacionalidadFormlario.selectedIndex; //se agrega (;)
  var nacionalidad = nacionalidadFormlario.options[i].value; //se agrega (;)
  
  console.log(nombre, edad); //se agrega (;)
  console.log(nacionalidad); //se agrega (;)

  if (nombre.length === 0) {
    nombreFormulario.classList.add("error"); //se agrega (;)
  }
  if (edad < 18 || edad > 120) {
    edadFormulario.classList.add("error"); //se agrega (;)
  }

if (nombre.length > 0  && (edad > 18   && edad < 120) ) { //se acomodo en una sola linea 
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados"); //se agrega (;)

var elementoLista = document.createElement("div"); //se agrega (;)
elementoLista.classList.added("elemento-lista"); //se agrega (;)
lista.appendChild(elementoLista); //se agrega (;)


//este fragmento de codigo tiene elementos repetidos
/*
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
*/

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span"); //se agrega (;)
var inputNombre = document.createElement("input"); //se agrega (;)
var espacio = document.createElement("br"); //se agrega (;)
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor; //se agrega (;)
elementoLista.appendChild(spanNombre); //se agrega (;)
elementoLista.appendChild(inputNombre); //se agrega (;)
elementoLista.appendChild(espacio); //se agrega (;)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

var corteLinea = document.createElement("br"); //se agrega (;)
elementoLista.appendChild(corteLinea); //se agrega (;)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove(); //se agrega (;)
  }
}
//formulario de validación//

const nombre = document.getElementById('name');
const apellido = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const parrafo = document.getElementById('warnings')

formInicio.addEventListener("submit", e => {
  e.preventDefault()
  let warnings = "";
  entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,4})+$/; /* Sacado de Email validation */
  parrafo.innerHTML = "";
  if (nombre.value.length < 4) {
    warnings += 'El nombre es muy corto. <br>';
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += 'El email no es valido. <br>';
    entrar = true;
  }
  if (password.value.length < 8) {
    warnings += 'La contraseña no es valida.';
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Su formulario ha sido enviado.";
  }
})


document.getElementById('formInicio').addEventListener('submit', function (value) {
  value.preventDefault();   //Evita el envío del formulario si la validación falla

  // Accedo a los campos del formulario y se muestran los valores en la consola
  let name = document.getElementById('name').value;
  let lastName = document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  console.log('Nombre: ', name);
  console.log('Apellido: ', lastName);
  console.log('Email: ', email);
  console.log('Contraseña: ', password);
})



function agregarTarea(seccion) {
  // Obtener el valor del campo de entrada de texto correspondiente a la sección
  var inputId = "nombreTarea" + seccion;
  var nuevaTarea = document.getElementById(inputId).value;

  // Crear un nuevo elemento de lista
  var nuevoElemento = document.createElement("li");

  // Agregar el valor del campo de entrada de texto al nuevo elemento de lista
  nuevoElemento.appendChild(document.createTextNode(nuevaTarea));

  // Crear el checkbox para la tarea
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "opcion";

  // Agregar el checkbox al final del nuevo elemento de lista
  nuevoElemento.appendChild(checkbox);

  // Obtener la lista correspondiente a la sección
  var listaId = "lista" + seccion;
  var lista = document.getElementById(listaId);

  // Agregar el nuevo elemento de lista a la lista existente
  lista.appendChild(nuevoElemento);

  // Limpiar el campo de entrada de texto
  document.getElementById(inputId).value = "";
}


// Función para eliminar una tarea de la lista
function eliminarTarea(seccion) {
  // Obtener la lista correspondiente a la sección
  let listaId = "lista" + seccion;
  let lista = document.getElementById(listaId);

  // Obtener el primer elemento de lista de la lista
  let primerElemento = lista.getElementsByTagName("li")[0];

  // Verificar si hay un elemento para eliminar
  if (primerElemento) {
    // Eliminar el primer elemento de lista de la lista
    lista.removeChild(primerElemento);
  }
}




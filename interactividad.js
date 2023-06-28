document.getElementById('form-inicio').addEventListener('submit', function (value) {
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

console.log("luna")

function agregarTarea() {

    const lista = document.getElementById("lista")
    const textoTarea = document.getElementById("nombreTarea")

    const nuevoElem = document.createElement("li")

    // console.log(textoTarea)

    nuevoElem.innerHTML = textoTarea.value

    lista.appendChild(nuevoElem)
}

function eliminarTarea() {
    const lista = document.getElementById("lista")
    const textoTarea = document.getElementById("nombreTarea")

    // for(let i =0; i < lista.childElementCount; i++) {
    //     console.log(lista.children[i])
    // }

    if (lista.childElementCount > 0) {
        lista.removeChild(lista.lastChild)
    }
}

//imagenes tipo carrousel//

document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000);
  
    function nextSlide() {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    }
  });

  function prevSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }
  
  function nextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }
  
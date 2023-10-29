
 //INICIO ENTREGA 7 PARTE 1
 function isLoggedIn() {
    let dato = localStorage.getItem("email");
    if (dato){
        return true;
    }else{
        return false;
    }
}

//función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("email");
    window.location.href = 'login.html'; //redirige al inicio
}

//evento click cerrar sesión
document.getElementById("cerrarSesion").addEventListener("click", function() {
    cerrarSesion();
} );


window.addEventListener('load', function() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
});

document.addEventListener("DOMContentLoaded", function () {
   
    let input = document.getElementById("inputEmail");
    if (email) {
      input.value = email;
    }
  });
  
//FIN ENTREGA 7 PARTE 1




//INICIO ENTREGA 7 PARTE 2
document.getElementById("btnGuardarCambios").addEventListener("click", function () {
    let camposObligatorios = document.querySelectorAll('[required]');
    let todosCamposCompletos = true;

    //RECORRE LOS CAMPOS OBLIGATORIOS Y SI ESTÁN VACÍOS LE PONEN LA CLASE INVÁLIDA, SINO, NO
  
    camposObligatorios.forEach(function (campo) {
      if (campo.value.trim() === "") {
        campo.classList.add("is-invalid");
        todosCamposCompletos = false;
      } else {
        campo.classList.remove("is-invalid");
      }
    });
  

    //SI ESTÁN AL MENOS LOS OBLIGATORIOS SE GUARDA EN UN OBJETO Y SE CARGA EN UN LOCALSTORAGE
    if (todosCamposCompletos) {
      let perfilData = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value,
        segnombre: document.getElementById("segnombre").value,
        segapellido: document.getElementById("segapellido").value,
      };
      localStorage.setItem("perfilData", JSON.stringify(perfilData));
  
      //   ALERTA EXITO BOOTSTRAP
      let successMessage = document.getElementById("success-message");
      successMessage.classList.remove("d-none");
      successMessage.classList.add("show");
    }
  });
//FIN ENTREGA 7 PARTE 2






//INICIO ENTREGA 7 PARTE 3

//AL CARGAR LA PÁGINA, SI TIENE PERFIL GUARDADO,  SE CARGAN LOS VALORES DEL LOCALSTORAGE A LOS INPUTS
document.addEventListener("DOMContentLoaded", function () {
    let storedPerfilData = localStorage.getItem("perfilData");
  
    if (storedPerfilData) {
      let perfilData = JSON.parse(storedPerfilData);
  
      document.getElementById("nombre").value = perfilData.nombre;
      document.getElementById("apellido").value = perfilData.apellido;
      document.getElementById("telefono").value = perfilData.telefono;
      document.getElementById("segnombre").value = perfilData.segnombre;
      document.getElementById("segapellido").value = perfilData.segapellido;
      // Cargar otros campos si es necesario
    }
  });

//FIN ENTREGA 7 PARTE 3





//INICIO ENTREGA 7 DESAFIATE


//FIN ENTREGA 7 DESAFIATE





//OTRAS FUNCIONES NECESARIAS

const btnTema = document.getElementById('btnTema');
const body = document.body;

// Función para cambiar el tema
function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light'); // Guardar el tema en el almacenamiento local
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Guardar el tema en el almacenamiento local
    }
}

// Verificar el tema almacenado en el almacenamiento local y aplicarlo si existe
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
  } else {

  body.classList.add('light-theme')
  }
    
// Agregar un listener al botón para cambiar el tema cuando se hace clic
btnTema.addEventListener('click', toggleTheme);




//Muestra en la página el email del usuario
let email = localStorage.getItem("email"); // <- email = "emilianopintos18@gmail.com"

let li_nav = document.getElementById("usuario");

li_nav.innerHTML = `<span class="nav-link">${email}</span>`;
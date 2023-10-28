
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

//FIN ENTREGA 7 PARTE 1




//INICIO ENTREGA 7 PARTE 2


//FIN ENTREGA 7 PARTE 2






//INICIO ENTREGA 7 PARTE 3


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
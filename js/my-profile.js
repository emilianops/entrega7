
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

//espera a que cargue la pág.
document.addEventListener("DOMContentLoaded", function () {

    // obtiene elemento de entrada del form por el id y lo almacena
    const campoPrimerNombre = document.getElementById("primerNombre");
    const campoSegundoNombre = document.getElementById("segundonombre");
    const campoPrimerApellido= docuement.getElementById("primerapellido");
    const campoSegundoApellido = document.getElementById("segundoApellido");
    const campoInputEmail = document.getElementById("inputEmail");
    const campoInputTelf = document.getElementById("inputTelf");

    // idem anterior: obtiene boton guardar cambios
    const botonGuardarCambios = document.getElementById("guardarCambios");

    // agrega evento al boton xa q se ejecute la función al dar click
    botonGuardarCambios.addEventListener("click", function () {

    // obtiene datos ingresados en campos por usuario y los almacena
    const primerNombre = campoPrimerNombre.value;
    const segundoNombre = campoSegundoNombre.value;
    const primerApellido = campoPrimerApellido.value;
    const segundoApellido = campoSegundoApellido.value;
    const email = campoInputEmail.value; 
    const telefono = campoInputTelf.value;

    // valida campos obligatorios
    if (!primerNombre || !primerApellido || !email) {
        alert("Completar campos obligatorios*");
        return;
    }

    // guardar datos en el localstorage
    const datos= {
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        email,
        telefono,
        
    };

    //antes de almacernar, los convertimos a cadena JSON
    localStorage.setItem("datosUsuario", JSON.stringify(datos));

    alert("Datos guardados");



    });

//FIN ENTREGA 7 PARTE 2


//INICIO ENTREGA 7 PARTE 3

// si hay datos guardados, los muestra
const datosGuardados = localStorage.getItem("datosUsuario");
if (datosGuardados) {
    const datos = JSON.parse (datosGuardados); //si hay datos, se parsean desde JSON a JS
    campoPrimerNombre.value = datos.primerNombre;
    campoSegundoNombre.value = datos.segundoNombre;
    campoPrimerApellido.value = datos.primerApellido;
    campoSegundoApellido.value = datos.segundoApellido;
    campoInputEmail.value = datos.inputEmail;
    campoInputTelf.value = datos.inputTelf;
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
//Definimos la funcion flecha de registro

// Función para guardar datos del formulario
const registrarUsuario = () => {
    const cedula = document.getElementById("cedula").value;
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const ciudadNacimiento = document.getElementById("ciudadNacimiento").value;

    // Validar campos
    if (!cedula || !id || !nombre || !fechaNacimiento || !ciudadNacimiento) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Crear un objeto para el nuevo usuario
    const nuevoUsuario = { cedula, id, nombre, fechaNacimiento, ciudadNacimiento };

    
    // Obtener el array de usuarios del localStorage (si no existe, inicializarlo)
    // usamos la funcion Json.parse para convertir en formato JSON el objeto definido
    //luego con localStorage.getItem obteneos la cadena de textto guarada con el nombre usuarios
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Agregar el nuevo usuario al array de usuarios, donde ya definimos el espacio en la linea anterior
    usuarios.push(nuevoUsuario);

    // Guardar el array actualizado en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));


    
    // Redirigir a la página de la tabla
    window.location.href = "tabulacion.html";
};

// Función para cargar datos en la tabla
const cargarDatosTabla = () => {
    // Obtener el array de usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Obtener referencia al tbody
    const tbody = document.querySelector("#tablaDatos tbody");

    // Limpiar el tbody (por si ya tiene datos)
    tbody.innerHTML = "";

    // Recorrer el array de usuarios y crear una fila para cada uno
    usuarios.forEach(usuario => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.cedula}</td>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.fechaNacimiento}</td>
            <td>${usuario.ciudadNacimiento}</td>
        `;
        tbody.appendChild(fila);
    });
};

// Detectar qué página se está cargando
document.addEventListener("DOMContentLoaded", () => {
    // Si estamos en el formulario, añadir evento al botón
    if (document.getElementById("registrar")) {
        document.getElementById("registrar").addEventListener("click", (e) => {
            e.preventDefault(); // Prevenir comportamiento por defecto
            registrarUsuario();
        });
    }

    // Si estamos en la tabla, cargar los datos
    if (document.getElementById("tablaDatos")) {
        cargarDatosTabla();
    }
});

//Definimos el evento de registrar en el boton
const button4 = document.getElementById('button4');
button4.addEventListener("click", registrarUsuario);

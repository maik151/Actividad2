# Actividad2
Repositorio de actividad de Aprendizaje 2

# Proyecto de Registro de Usuarios y Funcionalidades Lógicas

Este proyecto consiste en un sistema con múltiples páginas interactivas que permiten realizar tareas como registrar usuarios, realizar comparaciones de números, gestionar listas de nombres, y mostrar el mes correspondiente a un número. Las funcionalidades incluyen el uso de estructuras condicionales (`if`, `switch`) y manejo de arrays.

## Páginas del Proyecto

### 1. Página de Inicio

La **página de inicio** muestra los datos personales de un estudiante, organizados de forma clara.

#### Estructura de la Página

- **Datos del Estudiante**:
  - **Nombre**: Se muestra el nombre del estudiante.
  - **Correo**: Se muestra el correo electrónico del estudiante.
  - **Curso**: Se muestra el curso que está cursando el estudiante.

La página está diseñada de manera limpia y organizada para que los datos sean fácilmente legibles.

---

### 2. Página de Funcionalidades Lógicas

Esta página está diseñada para implementar tres funcionalidades lógicas con estructuras condicionales y manejo de arrays.

#### Estructura if: Comparación de Números

- **Campos de Entrada**:
  - El usuario puede ingresar dos números en campos de texto.
- **Botón de Comparación**:
  - Al presionar el botón, se realiza una comparación de los dos números utilizando una estructura `if`.
  - Se muestra el número mayor en un div o un mensaje personalizado cuando ambos números son iguales.

#### Estructura switch: Mostrar el Mes Correspondiente

- **Campo de Entrada**:
  - El usuario puede ingresar un número del 1 al 12.
- **Botón de Confirmación**:
  - Al presionar el botón, se utiliza una estructura `switch` para mostrar mediante una alerta el mes correspondiente al número ingresado.

#### Gestión de Arrays: Lista de Nombres

- **Campo de Entrada**:
  - El usuario puede ingresar nombres de personas.
- **Botón de Agregar**:
  - Los nombres ingresados se almacenan en un array y, al presionar el botón "Agregar", se agrega el nombre a la lista.
- **Visualización**:
  - La lista de nombres se muestra dinámicamente en otro div.

---

### 3. Página de Registro de Usuarios

La **página de registro de usuarios** permite ingresar los datos de los usuarios y almacenarlos en el navegador. Al presionar el botón de "Registrar", los datos se almacenan y se muestran en formato tabular en una página diferente.

#### Campos del Formulario

- **ID**: Campo de texto para ingresar un identificador único del usuario.
- **Cédula de Identidad**: Campo de texto para ingresar el número de cédula.
- **Nombres y Apellidos**: Campo de texto para ingresar el nombre completo del usuario.
- **Fecha de Nacimiento**: Campo de tipo `date` para seleccionar la fecha de nacimiento.
- **Ciudad de Procedencia**: Menú desplegable con al menos cinco opciones de ciudades.

#### Funcionalidades

- **Botón de Registrar**: Al presionar el botón, se validan los campos del formulario y los datos se almacenan en `localStorage`.
- **Página de Visualización**: Los datos registrados se muestran en una nueva página en formato tabular, con las columnas correspondientes a los datos ingresados.

---

## Flujo de Trabajo

1. **Página de Inicio**: Muestra los datos personales del estudiante.
2. **Página de Funcionalidades Lógicas**: Permite al usuario interactuar con estructuras condicionales (`if` y `switch`) y gestionar una lista de nombres.
3. **Página de Registro de Usuarios**: Permite registrar usuarios con varios campos y mostrar los datos en una tabla en otra página.

---

## Tecnologías Utilizadas

- **HTML**: Estructura básica de la página.
- **CSS**: Diseño y estilización de las páginas.
- **JavaScript**: Lógica para manejar interactividad y almacenamiento local con `localStorage`.

---

## Instalación

Para ver este proyecto en tu propio entorno, sigue estos pasos:

1. **Clonar el Repositorio**:
   ```bash
   git clone <URL-del-repositorio>

### Explicación del `README.md`:

- **Página de Inicio**: Descripción de la página que muestra los datos del estudiante (nombre, correo y curso).
- **Página de Funcionalidades Lógicas**: Explica las tres funcionalidades (estructura `if`, `switch`, y gestión de arrays) que el usuario puede interactuar en la página correspondiente.
- **Página de Registro de Usuarios**: Detalles del formulario de registro de usuarios y la página que muestra los datos en formato tabular.
- **Tecnologías Utilizadas**: Se mencionan las tecnologías clave como HTML, CSS y JavaScript.
- **Instrucciones de Instalación**: Pasos para clonar el repositorio y abrir los archivos en el navegador.
- **Funcionalidades**: Descripción de lo que cada parte del proyecto permite hacer.
- **Licencia**: El proyecto está bajo la Licencia MIT, permitiendo su libre uso y modificación.

Este `README.md` está diseñado para que cualquier persona que lea el archivo pueda entender fácilmente las características del proyecto y cómo ejecutarlo.

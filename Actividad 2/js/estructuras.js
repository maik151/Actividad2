//Estructura If para comparar dos numertos y mostrar el mayor

//Definimos nuestro boton de comparar y le asiganmos el eventio
const compararNumeros = () => {
    // Obtener los valores de los inputs
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    // Obtener el div donde se mostrará el resultado
    const resultDiv = document.getElementById("result1");

    // Verificar si los valores son números
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = "Invalido";
        resultDiv.style.color = "red";
    } else {
        // Comparación de los números con la estructura if
        if (num1 > num2) {
            resultDiv.innerHTML = `${num1}`;
        } else if (num1 < num2) {
            resultDiv.innerHTML = `${num2}`;
        } else {
            resultDiv.innerHTML = "Iguales.";
            resultDiv.style.color = "red"
        }
        resultDiv.style.color = "#4CAF50";
    }
};
//Definimos nuestro boton de comparar y le asiganmos el evento
const button1 = document.getElementById('button1');
button1.addEventListener("click", compararNumeros);
//------------------------------------------------------------

//Definimos la funcion swtich para ver el mes dle a;o segfun el numero

const verMes = () =>{
    let numberSelect = document.getElementById('numberSelect').value;
    let resultDiv = document.getElementById('result2');

    let numeroMes = parseInt(numberSelect);

    if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
        resultDiv.innerHTML = "Valor Incorrecto";
        resultDiv.style.color = "red";  // Mostrar mensaje de error en rojo
    }
    else {
        // Usar un switch para determinar el mes
        let monthName;
        switch (numeroMes) {
            case 1: monthName = "Enero"; break;
            case 2: monthName = "Febrero"; break;
            case 3: monthName = "Marzo"; break;
            case 4: monthName = "Abril"; break;
            case 5: monthName = "Mayo"; break;
            case 6: monthName = "Junio"; break;
            case 7: monthName = "Julio"; break;
            case 8: monthName = "Agosto"; break;
            case 9: monthName = "Septiembre"; break;
            case 10: monthName = "Octubre"; break;
            case 11: monthName = "Noviembre"; break;
            case 12: monthName = "Diciembre"; break;
        }
        resultDiv.innerHTML = `${monthName}.`;
        resultDiv.style.color = "green";  // Mostrar el mes en verde
        
    }
}
//Definimos nuestro boton de ver el mes y le asiganmos el evento
const button2 = document.getElementById('button2');
button2.addEventListener("click", verMes);

//--------------------------------------------------------------------

//Definimos la funcion para gestionar el array de nombres
//Declaramos primero el array en el localstorage

let namesArray = [];
const agregarArray = () =>{
    let nameInput = document.getElementById("name").value;
    let nameListDiv = document.getElementById("nameList");

    if (nameInput.trim() !== "") {
        // Agregar el nombre al array
        namesArray.push(nameInput.trim());
        
        // Mostrar la lista de nombres de forma dinámica
        nameListDiv.innerHTML = namesArray.map(name => `<p>${name}</p>`).join('');
        
        // Limpiar el input
        document.getElementById('name').value = "";
        document.getElementById('name').ariaPlaceholder = "hola";
        
    } 
    else {
        alert("Por favor, ingresa un nombre.");
    } 
}
//Definimos el evento en el boton de agregar
const button3 = document.getElementById('button3');
button3.addEventListener("click", agregarArray);



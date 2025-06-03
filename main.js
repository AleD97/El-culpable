// Definimos a los sospechosos como objetos
const sospechosos = [
    { nombre: "Alex" },
    { nombre: "Bianca" },
    { nombre: "Carlos" }
];

// Contador de intentos
let intentos = 2;

// Función para elegir al azar al culpable
function elegirCulpable() {
    const indiceCulpable = Math.floor(Math.random() * sospechosos.length);
    return sospechosos[indiceCulpable];
}

// Función para mostrar a los sospechosos en la interfaz
function mostrarSospechosos(culpable) {
    const sospechososDiv = document.getElementById("sospechosos");
    sospechosos.forEach(sospechoso => {
        const button = document.createElement("button");
        button.textContent = sospechoso.nombre;
        button.onclick = function() {
            if (sospechoso === culpable) {
                document.getElementById("resultado").innerText = "¡Has encontrado al culpable! " + sospechoso.nombre + " era el culpable.";
            } else {
                intentos--;
                document.getElementById("resultado").innerText = sospechoso.nombre + " no es el culpable. Te quedan " + intentos + " intentos.";
                if (intentos === 0) {
                    // Deshabilitar todos los botones
                    const botones = document.querySelectorAll("button");
                    botones.forEach(boton => {
                        boton.disabled = true;
                    });
                    // Mostrar mensaje de fin del juego
                    document.getElementById("resultado").innerText = "¡Se acabaron los intentos! El culpable era " + culpable.nombre + ".";
                    // Mostrar explicación del culpable
                    document.getElementById("explicacion").style.display = "block";
                }
            }
        };
        sospechososDiv.appendChild(button);
    });
}

// Inicialización del juego
function iniciarJuego() {
    const culpable = elegirCulpable();
    console.log("El culpable es:", culpable.nombre);
    mostrarSospechosos(culpable);
}

// Llamamos a la función para iniciar el juego
iniciarJuego();



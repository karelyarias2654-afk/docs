// ===== MENSAJES =====
const mensajes = [
    "✨ Estoy programando mi primera página web ✨",
    "💖 Amo aprender desarrollo web",
    "🚀 Voy a ser desarrolladora de software",
    "🧠 Programar es como resolver acertijos",
    "🌈 Cada día aprendo algo nuevo"
];

let indice = 0;

// Cambia el mensaje
function saludar() {
    const texto = document.getElementById("mensaje");
    texto.innerText = mensajes[indice];

    indice++;
    if (indice === mensajes.length) {
        indice = 0;
    }
}

// Modo oscuro
function modoOscuro() {
    document.body.classList.toggle("dark");
}

// Cambiar color de fondo
function cambiarColor() {
    const colores = [
        "#fce4ec",
        "#e3f2fd",
        "#f3e5f5",
        "#e8f5e9",
        "#fffde7",
        "#ede7f6"
    ];

    const aleatorio = Math.floor(Math.random() * colores.length);

    // Cambiamos el color del CONTENEDOR
    const contenedor = document.querySelector(".contenedor");
    contenedor.style.backgroundColor = colores[aleatorio];
}




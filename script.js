// script.js - Código completo para la historieta interactiva

// Variables globales
let decisiones = []; // Para registrar las elecciones del usuario

// Función principal para cambiar viñetas
function cambiarViñeta(numero) {
    // Oculta todas las viñetas
    document.querySelectorAll('.viñeta').forEach(viñeta => {
        viñeta.classList.remove('active');
    });
    
    // Muestra la viñeta solicitada
    const viñeta = document.getElementById(`viñeta${numero}`);
    if (viñeta) {
        viñeta.classList.add('active');
        
        // Desplazamiento suave al inicio de la viñeta
        viñeta.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error(`No se encontró la viñeta ${numero}`);
    }
}

// Función para manejar decisiones éticas
function elegir(opcion) {
    // Registra la decisión
    decisiones.push(opcion);
    
    // Redirige según la opción
    if (opcion === 'salvar') {
        // Rama de redención
        cambiarViñeta('6a');
    } else {
        // Rama de destrucción
        cambiarViñeta('6b');
    }
    
    // Actualiza el historial de decisiones (opcional)
    actualizarHistorial();
}

// Función para reiniciar la historieta
function reiniciar() {
    // Reinicia el registro de decisiones
    decisiones = [];
    
    // Vuelve a la primera viñeta
    cambiarViñeta(1);
    
    // Restablece el historial
    const historial = document.getElementById('historial-decisiones');
    if (historial) historial.innerHTML = '';
}

// Función opcional para mostrar el historial de decisiones
function actualizarHistorial() {
    const contenedor = document.getElementById('historial-decisiones');
    if (!contenedor) return;
    
    contenedor.innerHTML = decisiones.map((dec, i) => 
        `<li>Decisión ${i+1}: ${dec === 'salvar' ? 'Ética del cuidado' : 'Egoísmo'}</li>`
    ).join('');
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Comienza en la primera viñeta
    cambiarViñeta(1);
    
    // Opcional: Botón de reinicio en todas las viñetas finales
    document.querySelectorAll('.btn-reiniciar').forEach(boton => {
        boton.addEventListener('click', reiniciar);
    });
    
    // Efectos especiales para imágenes (opcional)
    document.querySelectorAll('.imagen-viñeta').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('zoom');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto de Invocación de Carta para Ale.png
    const cartaImagen = document.querySelector('.profile-img');
    
    if (cartaImagen) {
        // Esperamos un breve instante para que empiece el efecto visual
        setTimeout(() => {
            cartaImagen.classList.add('summoned');
            console.log("¡Entidad Alejandro invocada con éxito en el cosmos!");
        }, 300); 
    }

    // 2. Lógica del Botón Interactivo ("Iniciar Simulación")
    const botonSimulacion = document.querySelector('.btn-interactive');
    
    if (botonSimulacion) {
        botonSimulacion.addEventListener('click', () => {
            // Añadimos un pequeño efecto de vibración a la carta al presionar el botón
            if (cartaImagen) {
                cartaImagen.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    cartaImagen.style.transform = 'scale(1)';
                }, 150);
            }
            
            alert('🌌 Resonancia cósmica activada. Datos saturados con éxito. ¡Hola, Profesor! 🚀');
        });
    }
});

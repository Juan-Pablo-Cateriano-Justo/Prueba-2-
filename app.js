document.addEventListener('DOMContentLoaded', () => {
    const cartaImagen = document.querySelector('.profile-img');
    
    if (cartaImagen) {
        // Un retraso elegante antes de la invocación
        setTimeout(() => {
            cartaImagen.classList.add('summoned');
            console.log("🌌 Invocación cinemática completada: Atardecer en órbita.");
        }, 400); 
    }

    // Interacción suave con el botón principal
    const botonSimulacion = document.querySelector('.btn-interactive');
    
    if (botonSimulacion) {
        botonSimulacion.addEventListener('click', () => {
            if (cartaImagen) {
                // Sutil pulsación elástica al hacer clic
                cartaImagen.style.transform = 'scale(1.02) translateY(-5px)';
                cartaImagen.style.boxShadow = '0 0 40px rgba(240, 113, 103, 0.7)';
                
                setTimeout(() => {
                    cartaImagen.style.transform = 'scale(1) translateY(0)';
                    cartaImagen.style.boxShadow = ''; // Regresa al CSS original de forma suave
                }, 300);
            }
            
            alert('🌅 Resonancia cósmica activada. Datos saturados con éxito. ¡Hola, Profesor! 🚀');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. INVOCACIÓN CINEMÁTICA DE LA CARTA
    // ==========================================
    const cartaImagen = document.querySelector('.profile-img');
    if (cartaImagen) {
        setTimeout(() => {
            cartaImagen.classList.add('summoned');
        }, 400); 
    }

    // ==========================================
    // 2. MOTOR GRÁFICO DE ONDAS (SENO / COSENO)
    // ==========================================
    const boton = document.getElementById('btn-simular');
    const canvas = document.getElementById('canvas-ondas');
    const ctx = canvas.getContext('2d');

    let animacionID;
    let simulaciónActiva = false;
    let fasedeOnda = 0; // Controla el movimiento horizontal de las ondas

    // Ajustar resolución del canvas internamente
    function mapearResolucion() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    // El renderizador matemático que corre frame por frame
    function renderizarOndas() {
        // Limpiamos el lienzo con un rastro sutil para dar efecto "motion blur" neón
        ctx.fillStyle = 'rgba(13, 11, 24, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const medioY = canvas.height / 2;
        const amplitud = 35; // Altura de las crestas
        const frecuencia = 0.015; // Qué tan juntas están las ondas

        // --- DIBUJAR ONDA SENO (Tono Naranja/Rosa Atardecer) ---
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#f07167';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#cc2b7a';

        for (let x = 0; x < canvas.width; x++) {
            // Ecuación: y = sin(x * freq + fase) * amp
            const y = medioY + Math.sin(x * frecuencia + fasedeOnda) * amplitud;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // --- DIBUJAR ONDA COSENO (Tono Cian Estela Cósmica) ---
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = '#4cc9f0';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#4cc9f0';

        for (let x = 0; x < canvas.width; x++) {
            // Ecuación: y = cos(x * freq + fase) * amp (invertida un poco para desfase estético)
            const y = medioY + Math.cos(x * frecuencia - fasedeOnda) * (amplitud * 0.85);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Resetear sombra para optimizar rendimiento de renderizado
        ctx.shadowBlur = 0;

        // Avanzar la fase para que las ondas se desplacen lateralmente hacia la izquierda/derecha
        fasedeOnda += 0.04; 

        // Ciclo infinito coordinado con los hz del monitor
        animacionID = requestAnimationFrame(renderizarOndas);
    }

    // Evento del botón de control
    if (boton && canvas) {
        boton.addEventListener('click', () => {
            if (!simulaciónActiva) {
                // ACTIVAR SIMULACIÓN
                simulaciónActiva = true;
                boton.textContent = "Detener Simulación";
                boton.style.background = "linear-gradient(45deg, #4cc9f0, #321555)";
                boton.style.color = "#fff";

                canvas.classList.add('active');
                
                // Darle un frame al navegador para renderizar el bloque y calcular dimensiones
                setTimeout(() => {
                    mapearResolucion();
                    renderizarOndas();
                }, 50);

            } else {
                // APAGAR SIMULACIÓN
                simulaciónActiva = false;
                boton.textContent = "Iniciar Simulación Cuántica";
                boton.style.background = ""; // Revierte al gradiente naranja/magenta original del CSS
                boton.style.color = "";

                canvas.classList.remove('active');
                cancelAnimationFrame(animacionID); // Detiene el bucle para ahorrar CPU/RAM
            }
        });

        // Reajustar tamaño si el profe cambia el tamaño de la ventana
        window.addEventListener('resize', () => {
            if (simulaciónActiva) mapearResolucion();
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. INVOCACIÓN CINEMÁTICA DE LA CARTA YU-GI-OH!
    // ==========================================
    const yugiohCard = document.getElementById('card-summon');
    
    if (yugiohCard) {
        // Retraso elegante para que cargue la interfaz y "caiga" la invocación
        setTimeout(() => {
            yugiohCard.classList.add('summoned');
            console.log("⚔️ ¡Monstruo invocado en Modo de Ataque con éxito!");
        }, 400); 
    }

    // ==========================================
    // 2. MOTOR GRÁFICO DE ONDAS (SENO / COSENO)
    // ==========================================
    // (Conserva aquí todo el código del Canvas que pusimos en el paso anterior)
    const boton = document.getElementById('btn-simular');
    const canvas = document.getElementById('canvas-ondas');
    // ... todo el resto de tu lógica del canvas sigue igual ...

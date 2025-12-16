// Datos de los ganadores - ¡EDITA AQUÍ LOS NOMBRES!
// Formato: 'winner-X' para ganador, 'winner-X-2' para 2º lugar, etc.
const winners = {
// AMIGO DEL AÑO (PRINCIPAL)
    'winner-1': 'Nay',
    'winner-1-2': 'Chiara',
    'winner-1-3': 'Renzo',
    'winner-1-4': 'Facu',

    
    // AMIGO PROMESA DEL AÑO
    'winner-2': 'Nay',
    'winner-2-2': 'Victor',
    'winner-2-3': 'Pepe',
    'winner-2-4': 'Elizabet',
    
    // SALIDA DEL AÑO
    'winner-3': 'Abasto con Katherine',
    'winner-3-2': 'Salida Caotica con Chiara',
    'winner-3-3': 'Caminata de cumpleaños',
    'winner-3-4': 'Salida a cenar con Renzo',
    
    // ENAMORAMIENTO DEL AÑO
    'winner-4': 'Nay',
    'winner-4-2': 'Iara',
    'winner-4-3': '?',
    'winner-4-4': '?',
    
    // MOMENTO DEL AÑO
    'winner-5': 'Salida Caotica con Chiara',
    'winner-5-2': 'Cuando Abandone la Facultad',
    'winner-5-3': 'Cuando conoci a mi novia',
    'winner-5-4': 'salida con iarazzz',
    
    // MEJOR SEMANA DEL AÑO
    'winner-6': 'Semana de la quinta',
    'winner-6-2': '?',
    'winner-6-3': 'Ultimo campamento Scout',
    'winner-6-4': '?',
    
    // DÍA MÁS MEMORABLE DEL AÑO
    'winner-7': 'Salida caotica con Chiara',
    'winner-7-2': 'Abandono a la facultad',
    'winner-7-3': 'Conoci a Katy',
    'winner-7-4': 'Dia de la quinta',
    
    // MEJOR DÍA DEL AÑO
    'winner-8': 'Salida caotica con Chiara',
    'winner-8-2': 'Mi cumpleaños',
    'winner-8-3': 'Entrevista de trabajo (Chiara)',
    'winner-8-4': 'Dia que conoci a mis Facuamigos',
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script cargado correctamente');
    
    // Obtener todos los elementos de tarjeta
    const cards = document.querySelectorAll('.award-card');
    console.log('Tarjetas encontradas:', cards.length);

    // Agregar evento de clic a cada tarjeta
    cards.forEach((card, index) => {
        console.log('Configurando tarjeta', index + 1);
        
        card.addEventListener('click', function(e) {
            console.log('Tarjeta clickeada:', index + 1);
            e.preventDefault();
            e.stopPropagation();
            
            // Alternar la clase 'flipped'
            this.classList.toggle('flipped');
            console.log('Estado flipped:', this.classList.contains('flipped'));

            // Actualizar los nombres de los ganadores cuando se voltea
            const positionElements = this.querySelectorAll('.position-name');
            console.log('Elementos de posición encontrados:', positionElements.length);
            
            positionElements.forEach(element => {
                const winnerId = element.id;
                const winnerName = winners[winnerId] || 'No definido';
                element.textContent = winnerName;
                console.log('Actualizado:', winnerId, '=', winnerName);
            });
        });

        // Agregar efecto de sombra en hover (solo en desktop)
        if (window.innerWidth > 768) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        }
    });
});


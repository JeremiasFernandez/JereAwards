// Datos de ejemplo - Actualiza estos objetos con los resultados reales
// Para añadir datos de nuevas ediciones, solo agrega entradas aquí

const statsData = {
    // Apariciones: nombre -> cantidad total de nominaciones en cualquier posición
    appearances: {
        "Chiara": 9,
        "Lourdes": 8,
        "Renzo": 7,
        "Luly": 5,
        "Katherine": 3,
        "Matias": 4,
        "Nay": 2,
        "Ariadna": 4,
        "Tomas": 5,
        "Julieta": 1,
        "Donny": 2,
        "Avi": 2,
        "Facundo:": 2,
        "Julieta": 2,
        "Sofia": 2,
    },

    // Ganadores: nombre -> { amigoDelAño, amigoPromesa }
    // amigoDelAño = veces que ganó 1er lugar en "Amigo del Año"
    // amigoPromesa = veces que ganó 1er lugar en "Amigo Promesa del Año"
    // Total Premios se calcula automáticamente como amigoDelAño + amigoPromesa
    winners: {
        "Luly": { amigoDelAño: 2, amigoPromesa: 1},
        "Matias": { amigoDelAño: 2, amigoPromesa: 0},
        "Renzo": { amigoDelAño: 1, amigoPromesa: 2},
        "Chiara": { amigoDelAño: 1, amigoPromesa: 2},
        "Nay": { amigoDelAño: 1, amigoPromesa: 1},
        "Julieta": { amigoDelAño: 1, amigoPromesa: 1},
        "Katherine": { amigoDelAño: 0, amigoPromesa: 1}
    }
};

// Función para poblar la tabla de Apariciones
function populateAppearances() {
    const tbody = document.getElementById('appearancesBody');
    tbody.innerHTML = '';

    // Convertir a array y ordenar por apariciones (descendente)
    const sorted = Object.entries(statsData.appearances)
        .sort((a, b) => b[1] - a[1]);

    sorted.forEach(([name, count], index) => {
        const row = document.createElement('tr');
        
        const rankCell = document.createElement('td');
        const rankBadge = document.createElement('span');
        rankBadge.classList.add('rank-badge');
        if (index === 0) rankBadge.classList.add('rank-1');
        else if (index === 1) rankBadge.classList.add('rank-2');
        else if (index === 2) rankBadge.classList.add('rank-3');
        else rankBadge.classList.add('rank-other');
        rankBadge.textContent = index + 1;
        rankCell.appendChild(rankBadge);
        
        const nameCell = document.createElement('td');
        nameCell.classList.add('name-cell');
        nameCell.textContent = name;
        
        const countCell = document.createElement('td');
        countCell.classList.add('count-cell');
        countCell.textContent = count;
        
        row.appendChild(rankCell);
        row.appendChild(nameCell);
        row.appendChild(countCell);
        tbody.appendChild(row);
    });
}

// Función para poblar la tabla de Ganadores
function populateWinners() {
    const tbody = document.getElementById('winnersBody');
    tbody.innerHTML = '';

    // Convertir a array, calcular total y ordenar:
    // 1. Primero por "amigoDelAño" (descendente)
    // 2. Luego por "amigoPromesa" (descendente)
    // 3. Finalmente por total (descendente)
    const winnersArray = Object.entries(statsData.winners).map(([name, data]) => {
        const total = data.amigoDelAño + data.amigoPromesa;
        const appearances = statsData.appearances[name] || 0;
        return { name, ...data, total, appearances };
    });

    winnersArray.sort((a, b) => {
        if (b.amigoDelAño !== a.amigoDelAño) return b.amigoDelAño - a.amigoDelAño;
        if (b.amigoPromesa !== a.amigoPromesa) return b.amigoPromesa - a.amigoPromesa;
        return b.total - a.total;
    });

    winnersArray.forEach((winner, index) => {
        const row = document.createElement('tr');
        
        const rankCell = document.createElement('td');
        const rankBadge = document.createElement('span');
        rankBadge.classList.add('rank-badge');
        if (index === 0) rankBadge.classList.add('rank-1');
        else if (index === 1) rankBadge.classList.add('rank-2');
        else if (index === 2) rankBadge.classList.add('rank-3');
        else rankBadge.classList.add('rank-other');
        rankBadge.textContent = index + 1;
        rankCell.appendChild(rankBadge);
        
        const nameCell = document.createElement('td');
        nameCell.classList.add('name-cell');
        nameCell.textContent = winner.name;
        
        const amigoDelAñoCell = document.createElement('td');
        amigoDelAñoCell.classList.add('count-cell');
        amigoDelAñoCell.textContent = winner.amigoDelAño;
        
        const amigoPromesaCell = document.createElement('td');
        amigoPromesaCell.classList.add('count-cell');
        amigoPromesaCell.textContent = winner.amigoPromesa;
        
        const totalCell = document.createElement('td');
        totalCell.classList.add('count-cell');
        totalCell.textContent = winner.total;
        
        const appearancesCell = document.createElement('td');
        appearancesCell.classList.add('count-cell');
        appearancesCell.textContent = winner.appearances;
        
        row.appendChild(rankCell);
        row.appendChild(nameCell);
        row.appendChild(amigoDelAñoCell);
        row.appendChild(amigoPromesaCell);
        row.appendChild(totalCell);
        row.appendChild(appearancesCell);
        tbody.appendChild(row);
    });
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    populateAppearances();
    populateWinners();
});

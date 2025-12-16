// Datos de ganadores 2024 (edita cuando tengas los resultados definitivos)
const winners = {
	1: { first: 'Katherine', second: 'Facundo', third: 'Avi', fourth: 'Lucia' },
    2: { first: 'Chiara', second: 'Katherine', third: 'Facundo', fourth: 'Lourdes' },
	3: { first: 'Ecoparque (Avi)', second: 'Granjita (Avi, Fer)', third: 'Quinta de la plata', fourth: '?' },
	4: { first: 'Mar', second: '?', third: '?', fourth: '?' },
	5: { first: 'Cumpleaños Sorpresa', second: 'Tomando tereres con avi bajo la tormenta', third: 'Guada se le cayo la subte', fourth: 'Mi profe me dijo que mi corte quedo flama' },
	6: { first: 'Campamento Mendoza', second: 'Cumpleaños Week', third: 'Curso TVU', fourth: 'Vacaciones enero' },
	7: { first: 'Caminata a Lujan', second: 'Cumpleaños sorpresa', third: 'Salida con avi', fourth: 'Mi gata se perdio' },
	8: { first: 'Campamento a Mendoza', second: 'Cumpleaños sorpresa', third: 'Caminata a Lujan', fourth: 'Ecoparque Avi' }
};

function populateWinners() {
	Object.entries(winners).forEach(([key, value]) => {
		const { first, second, third, fourth } = value;
		const mapping = {
			first: document.getElementById(`winner-${key}`),
			second: document.getElementById(`winner-${key}-2`),
			third: document.getElementById(`winner-${key}-3`),
			fourth: document.getElementById(`winner-${key}-4`)
		};

		if (mapping.first) mapping.first.textContent = first;
		if (mapping.second) mapping.second.textContent = second;
		if (mapping.third) mapping.third.textContent = third;
		if (mapping.fourth) mapping.fourth.textContent = fourth;
	});
}

function initCards() {
	const cards = document.querySelectorAll('.award-card');
	cards.forEach(card => {
		card.addEventListener('click', () => {
			card.classList.toggle('flipped');
		});
		card.addEventListener('keypress', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				card.classList.toggle('flipped');
			}
		});
		card.setAttribute('tabindex', '0');
		card.setAttribute('role', 'button');
		card.setAttribute('aria-pressed', 'false');
	});
}

document.addEventListener('DOMContentLoaded', () => {
	populateWinners();
	initCards();
});

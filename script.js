const darkModeToggle = document.getElementById('mode-sombre')
const body = document.body;
const title = document.getElementById('title')

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Mode clair'
        title.textContent = 'Harry Potter : les cartes'
    } else {
        darkModeToggle.textContent = 'Mode sombre'
        title.textContent = 'Harry Potter : les cartes'
    }
});

fetch('https://hp-api.lainocs.fr/characters')
    .then(response => response.json())
    .then(data => {
        const characters = data.filter(character => 
            character.name === 'Harry Potter' || character.name === 'Ron Weasley' || character.name === 'Hermione Granger'
        );

        const cardsContainer = document.querySelector('.cards-container')

        characters.forEach(character => {
            const card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
                <p>Maison : ${character.house}</p>
                <p>Patronus : ${character.patronus}</p>
            `;
            cardsContainer.appendChild(card)
        })
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error)
    });
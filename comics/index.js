fetch('comics.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('cards-container').innerHTML =
      Object.entries(data).map(([code, d]) => createCard(code, d)).join('');
  })
  .catch(err => console.error('Error loading comics:', err));

const ordButton = document.querySelector('#reordenarBtn');
ordButton.addEventListener('click', reordenarCards);

function reordenarCards() {
  const parent = document.querySelector('#cards-container');
  [...parent.children].reverse().forEach(c => parent.appendChild(c));

  const use = this.querySelector('use');
  const flecha = use.getAttribute('href');
  if (flecha === '#arrow-down') {
    use.setAttribute('href', '#arrow-up');
    this.querySelector('#textoBtn').innerText = 'Más recientes primero';
  } else {
    use.setAttribute('href', '#arrow-down');
    this.querySelector('#textoBtn').innerText = 'Más antiguos primero';
  }
}

function createCard(code, data) {
  return `
    <div class="card" style="background-color: ${data.card_color};">
      <a href="./capitulo/?id=${code}"><img src="./capitulo/${code}/0.${data.format}" alt="${data.title}" loading="lazy" decoding="async"></a>
      <div class="card-body">
        <p class="card-text">${data.title}</p>
        <a href="./capitulo/?id=${code}" class="btn btn-primary">Leer</a>
      </div>
    </div>
  `;
}

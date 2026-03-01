const createNavElement = function (claves, nextComicNumber) {
  if (claves[0] === '') {
    return `
      <div class="nav-arrows right">
        <a href="../capitulo/?id=${claves[1]}"><img src="/assets/right.webp" alt="Siguiente cómic"></a>
      </div>
    `;
  } else if (Number(claves[1]) === nextComicNumber) {
    return `
      <div class="nav-arrows left">
        <a href="../capitulo/?id=${claves[0]}"><img src="/assets/left.webp" alt="Anterior cómic"></a>
      </div>
    `;
  } else {
    return `
      <div class="nav-arrows both">
        <a href="../capitulo/?id=${claves[0]}"><img src="/assets/left.webp" alt="Anterior cómic"></a>
        <a href="../capitulo/?id=${claves[1]}"><img src="/assets/right.webp" alt="Siguiente cómic"></a>
      </div>
    `;
  }
};

const navKeys = function (previous, next) {
  const format = num => num.toString().padStart(3, '0');
  return [
    typeof previous === 'string' ? previous : format(previous),
    typeof next     === 'string' ? next     : format(next),
  ];
};

const navKeysRaw = function (idURL) {
  const id = parseInt(idURL);
  if (isNaN(id)) return ['', 0];
  if (id === 0)  return ['cortos', id + 1];
  return [id - 1, id + 1];
};

export { navKeysRaw, navKeys, createNavElement };

import { navKeysRaw, navKeys, createNavElement } from './arrows.js';

const urlParams = new URLSearchParams(window.location.search);
const comicId = urlParams.get('id');

fetch('../comics.json')
  .then(response => response.json())
  .then(data => {
    const comicInfo = data[comicId];

    if (comicInfo == null) {
      console.log('No se encontró historieta :(');
      return;
    }

    document.getElementById('comic-container').innerHTML = createImageElements(comicInfo);

    const nextComicNumber = Object.keys(data).length - 1;
    document.getElementById('nav-buttons').innerHTML =
      createNavElement(navKeys(...navKeysRaw(comicId)), nextComicNumber);
  })
  .catch(err => console.error('Error loading comic:', err));

function createImageElements(comicInfo) {
  let imgList = '';
  for (let i = 0; i <= comicInfo.pages; i++) {
    imgList += `<img class="img-comic" src="./${comicId}/${i}.${comicInfo.format}" ${i === 0 ? 'loading="eager" fetchpriority="high" decoding="sync"' : 'loading="lazy" decoding="async"'}>`;
  }
  return imgList;
}

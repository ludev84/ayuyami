class Banner extends HTMLElement {
  connectedCallback() {
    const bgColor  = this.getAttribute('data-bg-color')  || '#8cb3ee';
    const flipChar = this.getAttribute('data-flip-char') || '';
    const text1    = this.getAttribute('data-text1')     || '';
    const text2    = this.getAttribute('data-text2')     || '';

    this.innerHTML = `
      <div class="banner mb-5" style="background-color: ${bgColor};">
        <a href=""><img class="logo-header" src="assets/logo.webp" alt="Ayu-Yami logo" loading="eager" fetchpriority="high" decoding="sync"></a>
        <div class="banner-text">
          <div class="bubblegum title"><span class="d-inline-block flip-y">${flipChar}</span>${text1}</div>
          <div class="bubblegum title">${text2}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('banner-component', Banner);

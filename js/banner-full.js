class BannerFull extends HTMLElement {
  connectedCallback() {
    const bgColor = this.getAttribute('data-bg-color') || '#fff0';

    this.innerHTML = `
      <div class="banner" style="background-color: ${bgColor};">
        <a href="/"><img class="logo-header" src="/assets/logo.webp" alt="Ayu-Yami logo" loading="eager" fetchpriority="high" decoding="sync"></a>
      </div>
    `;
  }
}

customElements.define('banner-full-component', BannerFull);

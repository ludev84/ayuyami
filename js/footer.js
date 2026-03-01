class Footer extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer>
        <div class="footer-whatsapp">
          <a class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" href="https://wa.me/5219993279475">
            <svg fill="currentColor" width="24" height="24"><use href="#whatsapp"/></svg>&nbsp;Haz tu pedido por WhatsApp aquí
          </a>
        </div>
        <div class="footer-icons">
          <div class="footer-brand">
            <a href="/" class="footer-link"><img src="/assets/icon-ayu-yami.webp" alt="Ayu-Yami icon" width="30" height="auto"></a>
            <span class="text-secondary">${year} Taiyaki Ayu-Yami</span>
          </div>

          <div>
            <a href="https://www.redbubble.com/people/taiyakiayu-yami/shop" target="_blank" rel="noopener noreferrer" class="footer-link">
              <svg width="30" height="30"><use href="#redbubbleIcon"/></svg>
              <span class="text-secondary fw-bold">Tienda en línea</span>
            </a>
          </div>

          <div>
            <a class="footer-link" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/aF3i35kVTvQ3X9JK7">
              <svg width="30" height="30"><use href="#bi-location"/></svg>
              <span class="text-secondary fw-bold">¡Visítanos!</span>
            </a>
          </div>

          <div class="footer-social">
            <ul>
              <li><a class="text-secondary" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TaiyakiAyuYami"><svg width="24" height="24"><use href="#facebook"/></svg></a></li>
              <li><a class="text-secondary" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/taiyaki.ayuyami"><svg width="24" height="24"><use href="#instagram"/></svg></a></li>
              <li><a class="text-secondary" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@taiyaki.ayuyami"><svg width="24" height="24"><use href="#tiktok"/></svg></a></li>
              <li><a class="text-secondary" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TaiyakiAyuYami"><svg width="24" height="24"><use href="#youtube"/></svg></a></li>
            </ul>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);

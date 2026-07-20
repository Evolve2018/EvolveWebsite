(function() {
  const footerHTML = `
    <footer class="ftr-wrap">
      <div class="ftr-inner">
        <div class="ftr-col ftr-contact">
          <p>6550 N 76th St, Milwaukee WI 53223</p>
          <p>414-510-4131 &middot; info@evolvenation.org</p>
        </div>
        <div class="ftr-col ftr-social">
          <a href="https://facebook.com/evolvenation" target="_blank" rel="noopener">Facebook</a>
          <a href="https://instagram.com/evolvenation" target="_blank" rel="noopener">Instagram</a>
          <a href="https://youtube.com/@evolvenationmke" target="_blank" rel="noopener">YouTube</a>
        </div>
      </div>
    </footer>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .ftr-wrap { width: 100%; background: #07141a; color: #fff; padding: 2rem 1rem; box-sizing: border-box; }
    .ftr-inner { max-width: 1100px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem; }
    .ftr-social a { color: #42B9D2; margin-right: 1rem; text-decoration: none; }
  `;
  document.head.appendChild(style);

  const mount = document.getElementById('evolve-footer-mount');
  if (mount) {
    mount.innerHTML = footerHTML;
  }

  // Re-report height AFTER footer injects, so TCC's iframe wrapper resizes correctly
  if (typeof sendHeight === 'function') {
    sendHeight();
  } else {
    window.parent.postMessage({ type: 'iframeHeight', height: document.body.scrollHeight }, '*');
  }
})();
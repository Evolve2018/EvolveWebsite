/* Evolve Church — shared site footer (v2, dynamic/modern)
   Hosted at: https://evolve2018.github.io/EvolveWebsite/evolveFooter.js
   Injected into every page via:
     <div id="evolve-footer-mount"></div>
     <script src="https://evolve2018.github.io/EvolveWebsite/evolveFooter.js"></script>
   Edit copy/links/style ONCE here — every page picks it up automatically.

   NOTE ON LINKS: page hrefs below point to https://www.evolvenation.org/<slug>
   with target="_top" so clicking breaks OUT of the embed iframe and navigates
   the real TCC site (same pattern already used in evolveNextGen.html). Slugs
   are my best guess based on your existing nav — double check them against
   your actual TCC page URLs and adjust any that don't match. */
(function () {
  var STYLE_ID = 'evolve-footer-styles-v2';

  if (!document.getElementById(STYLE_ID)) {
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent =
      "@import url('https://fonts.googleapis.com/css2?family=Dynalight&family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600&display=swap');" +

      ".ef-footer{position:relative;font-family:'Barlow',sans-serif;background:linear-gradient(180deg,#07141a 0%,#050d11 100%);color:#cfe7ee;padding:64px 24px 0;overflow:hidden;width:100%;box-sizing:border-box;}" +
      ".ef-footer *{box-sizing:border-box;}" +
      ".ef-footer a{text-decoration:none;}" +

      /* ambient glow, subtle, matches the orb motif used on your other pages */
      ".ef-glow{position:absolute;top:-120px;left:50%;transform:translateX(-50%);width:640px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(66,185,210,0.16),transparent 65%);filter:blur(40px);pointer-events:none;}" +

      ".ef-shell{position:relative;max-width:1160px;margin:0 auto;}" +

      /* ---- top grid: brand + nav columns ---- */
      ".ef-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:36px;padding-bottom:44px;border-bottom:1px solid rgba(66,185,210,0.16);}" +
      "@media (max-width:900px){.ef-grid{grid-template-columns:1fr 1fr;}}" +
      "@media (max-width:560px){.ef-grid{grid-template-columns:1fr;text-align:center;}}" +

      ".ef-logo{display:inline-block;height:44px;width:auto;margin:0 0 4px;}" +

      /* signature: self-drawing growth line under the wordmark */
      ".ef-growline{display:block;width:120px;height:10px;margin:6px 0 18px;overflow:visible;}" +
      "@media (max-width:560px){.ef-growline{margin-left:auto;margin-right:auto;}}" +
      ".ef-growline path{fill:none;stroke:#42B9D2;stroke-width:2;stroke-linecap:round;stroke-dasharray:140;stroke-dashoffset:140;transition:stroke-dashoffset 1.1s cubic-bezier(.4,.1,.2,1);}" +
      ".ef-footer.ef-in .ef-growline path{stroke-dashoffset:0;}" +

      ".ef-addr{font-size:14px;line-height:1.75;color:#9fc4cf;margin:0 0 18px;}" +
      ".ef-addr a{color:#9fc4cf;}" +
      ".ef-addr a:hover{color:#42B9D2;}" +

      ".ef-social{display:flex;gap:10px;margin-bottom:8px;}" +
      "@media (max-width:560px){.ef-social{justify-content:center;}}" +
      ".ef-social a{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:999px;border:1px solid rgba(66,185,210,0.3);color:#9fd8e6;transition:transform .25s ease,background .25s ease,border-color .25s ease,color .25s ease;}" +
      ".ef-social a:hover{background:#42B9D2;border-color:#42B9D2;color:#07141a;transform:translateY(-3px);}" +
      ".ef-social svg{width:16px;height:16px;}" +

      ".ef-col h4{font-family:'Barlow Condensed',sans-serif;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;font-size:12.5px;color:#42B9D2;margin:0 0 16px;}" +
      ".ef-col ul{list-style:none;margin:0;padding:0;}" +
      ".ef-col li{margin-bottom:11px;}" +
      ".ef-col a{font-size:14.5px;color:#c3dee5;transition:color .2s ease,padding-left .2s ease;}" +
      ".ef-col a:hover{color:#42B9D2;padding-left:3px;}" +

      /* ---- quick-action CTA row ---- */
      ".ef-actions{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;padding:36px 0;}" +
      ".ef-action{font-family:'Barlow Condensed',sans-serif;font-weight:600;letter-spacing:0.6px;text-transform:uppercase;font-size:14px;color:#eaf6fa;padding:13px 26px;border-radius:999px;border:1px solid rgba(66,185,210,0.4);transition:transform .25s ease,background .25s ease,box-shadow .25s ease,color .25s ease;display:inline-flex;align-items:center;gap:8px;}" +
      ".ef-action:hover{transform:translateY(-2px);border-color:#42B9D2;box-shadow:0 10px 24px rgba(66,185,210,0.2);}" +
      ".ef-action--solid{background:#42B9D2;color:#07141a;border-color:#42B9D2;}" +
      ".ef-action--solid:hover{background:#fff;color:#07141a;}" +
      ".ef-action svg{width:14px;height:14px;}" +

      /* ---- bottom bar ---- */
      ".ef-bottom{border-top:1px solid rgba(66,185,210,0.14);padding:20px 0 26px;display:flex;flex-wrap:wrap;gap:10px 24px;justify-content:space-between;align-items:center;font-size:12.5px;color:#5f8a95;}" +
      "@media (max-width:560px){.ef-bottom{justify-content:center;text-align:center;}}" +
      ".ef-bottom a{color:#5f8a95;}" +
      ".ef-bottom a:hover{color:#42B9D2;}";
    document.head.appendChild(style);
  }

  var year = new Date().getFullYear();
  var TOP = '_top'; // links break out of the iframe to the real TCC site

  var ICONS = {
    facebook: '<path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.35A21 21 0 0 0 14.3 4c-2.24 0-3.77 1.37-3.77 3.88V10.5H8v3h2.53V21h3Z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1.1"/>',
    youtube: '<path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 9.2 15 12l-5 2.8Z"/>',
    spotify: '<circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M7 9.6c3-1 7.3-.6 9.7.9M7.2 12.6c2.4-.75 5.9-.5 8 .8M7.4 15.4c2-.6 4.6-.4 6.3.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>'
  };

  var ACTION_ICONS = {
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.5" r="2.3" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    play: '<path d="M6 4.5v15l14-7.5Z"/>',
    heart: '<path d="M12 20s-7.5-4.6-10-9.4C.4 7.3 2.4 4 6 4c2 0 3.6 1.1 4.5 2.6C11.4 5.1 13 4 15 4c3.6 0 5.6 3.3 4 6.6C19.5 15.4 12 20 12 20Z"/>'
  };

  function icon(name, set) {
    return '<svg viewBox="0 0 24 24" fill="currentColor">' + (set[name] || '') + '</svg>';
  }

  var html =
    '<footer class="ef-footer" id="efFooterRoot">' +
      '<div class="ef-glow"></div>' +
      '<div class="ef-shell">' +

        '<div class="ef-grid">' +

          '<div class="ef-col">' +
            '<img class="ef-logo" src="https://media.thechurchcoassets.com/accounts/5782/3a4fc265-94ce-48e6-a6bb-05f572ff696b-./EvolveBlack-(1).jpeg" alt="Evolve Church">' +
            '<svg class="ef-growline" viewBox="0 0 120 10"><path d="M1 8 Q 30 2, 60 6 T 119 3"/></svg>' +
            '<p class="ef-addr">' +
              '6550 N 76th St<br>Milwaukee, WI 53223<br>' +
              '<a href="tel:4145104131">414-510-4131</a><br>' +
              '<a href="mailto:info@evolvenation.org">info@evolvenation.org</a>' +
            '</p>' +
            '<div class="ef-social">' +
              '<a href="https://facebook.com/evolvenation" target="_blank" rel="noopener" aria-label="Facebook">' + icon('facebook', ICONS) + '</a>' +
              '<a href="https://instagram.com/evolvenation" target="_blank" rel="noopener" aria-label="Instagram">' + icon('instagram', ICONS) + '</a>' +
              '<a href="https://youtube.com/@evolvenationmke" target="_blank" rel="noopener" aria-label="YouTube">' + icon('youtube', ICONS) + '</a>' +
              '<a href="https://open.spotify.com/user/evolvenation" target="_blank" rel="noopener" aria-label="Spotify">' + icon('spotify', ICONS) + '</a>' +
            '</div>' +
          '</div>' +

          '<div class="ef-col">' +
            '<h4>About</h4>' +
            '<ul>' +
              '<li><a href="https://www.evolvenation.org/planyourvisit" target="' + TOP + '">Plan a Visit</a></li>' +
              '<li><a href="https://www.evolvenation.org/meetthestaff" target="' + TOP + '">Meet the Staff</a></li>' +
              '<li><a href="https://www.evolvenation.org/ourbeliefs" target="' + TOP + '">Our Beliefs</a></li>' +
              '<li><a href="https://www.evolvenation.org/knowingjesus" target="' + TOP + '">Knowing Jesus</a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="ef-col">' +
            '<h4>Ministries</h4>' +
            '<ul>' +
              '<li><a href="https://www.evolvenation.org/kids" target="' + TOP + '">Kids</a></li>' +
              '<li><a href="https://www.evolvenation.org/teens" target="' + TOP + '">Teens</a></li>' +
              '<li><a href="https://www.evolvenation.org/frwd" target="' + TOP + '">Frwd (19&ndash;28)</a></li>' +
              '<li><a href="https://www.evolvenation.org/lifegroups" target="' + TOP + '">Life Groups</a></li>' +
              '<li><a href="https://www.evolvenation.org/discipleship" target="' + TOP + '">Discipleship</a></li>' +
              '<li><a href="https://www.evolvenation.org/mentalhealth" target="' + TOP + '">Mental Health</a></li>' +
              '<li><a href="https://www.evolvenation.org/grievingministry" target="' + TOP + '">Grieving Ministry</a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="ef-col">' +
            '<h4>Get Involved</h4>' +
            '<ul>' +
              '<li><a href="https://www.evolvenation.org/events" target="' + TOP + '">Events</a></li>' +
              '<li><a href="https://www.evolvenation.org/volunteer" target="' + TOP + '">Volunteer</a></li>' +
              '<li><a href="https://www.evolvenation.org/businessdirectory" target="' + TOP + '">Business Directory</a></li>' +
              '<li><a href="https://youtube.com/@evolvenationmke" target="_blank" rel="noopener">Sermons</a></li>' +
            '</ul>' +
          '</div>' +

        '</div>' +

            
       '<div class="ef-actions">' +
          '<a class="ef-action" href="https://youtube.com/@evolvenationmke" target="_blank" rel="noopener">' + icon('play', ACTION_ICONS) + ' Watch Online</a>' +
          '<a class="ef-action" href="https://www.evolvenation.org/give" target="' + TOP + '">' + icon('heart', ACTION_ICONS) + ' Give</a>' +
        /* ----    '<a class="ef-action ef-action--solid" href="https://www.evolvenation.org/planyourvisit" target="' + TOP + '">' + icon('pin', ACTION_ICONS) + ' Plan Your Visit</a>' +   ---- */
        /*----  '<a class="ef-action" href="https://youtube.com/@evolvenationmke" target="_blank" rel="noopener">' + icon('play', ACTION_ICONS) + ' Watch Online</a>' + -----*/
        '</div>' +

        '<div class="ef-bottom">' +
          '<span>&copy; ' + year + ' Evolve Church. All rights reserved.</span>' +
          '<span>6550 N 76th St, Milwaukee, WI 53223</span>' +
        '</div>' +

      '</div>' +
    '</footer>';

  var mount = document.getElementById('evolve-footer-mount');
  if (mount) {
    mount.innerHTML = html;

    var root = document.getElementById('efFooterRoot');
    if (root) {
      var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        root.classList.add('ef-in');
      } else if (window.IntersectionObserver) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              root.classList.add('ef-in');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });
        io.observe(root);
      } else {
        root.classList.add('ef-in');
      }
    }

    // Nudge the iframe-height reporter now that the footer changed the page's height.
    // (Each page's own ResizeObserver on document.body will also catch this automatically.)
    if (typeof sendHeight === 'function') {
      sendHeight();
    } else {
      window.parent.postMessage(
        { type: 'iframeHeight', height: document.documentElement.scrollHeight },
        '*'
      );
    }
  }
})();
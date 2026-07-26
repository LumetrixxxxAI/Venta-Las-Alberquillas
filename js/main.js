(function () {
  "use strict";

  document.getElementById("anio").textContent = new Date().getFullYear();

  /* ---------- Cabecera: sombra/fondo al hacer scroll ---------- */
  var cabecera = document.getElementById("cabecera");
  function actualizarCabecera() {
    if (window.scrollY > 40) {
      cabecera.classList.add("en-scroll");
    } else {
      cabecera.classList.remove("en-scroll");
    }
  }
  actualizarCabecera();
  window.addEventListener("scroll", actualizarCabecera, { passive: true });

  /* ---------- Menú móvil ---------- */
  var botonMenu = document.getElementById("botonMenu");
  var navPrincipal = document.getElementById("navPrincipal");

  function cerrarMenu() {
    document.body.classList.remove("menu-abierto");
    botonMenu.setAttribute("aria-expanded", "false");
  }

  botonMenu.addEventListener("click", function () {
    var abierto = document.body.classList.toggle("menu-abierto");
    botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
  });

  navPrincipal.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", cerrarMenu);
  });

  /* ---------- Resaltar enlace de navegación activo ---------- */
  var secciones = document.querySelectorAll("section[id]");
  var enlacesNav = document.querySelectorAll(".nav-principal a");

  var observadorNav = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          var id = entrada.target.getAttribute("id");
          enlacesNav.forEach(function (enlace) {
            enlace.classList.toggle("activo", enlace.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  secciones.forEach(function (seccion) { observadorNav.observe(seccion); });

  /* ---------- Animaciones de aparición al hacer scroll ---------- */
  var elementosRevelados = document.querySelectorAll(".reveal:not(.visible)");
  var observadorReveal = new IntersectionObserver(
    function (entradas, obs) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          obs.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  elementosRevelados.forEach(function (el) { observadorReveal.observe(el); });

  /* ---------- Parallax sutil en el hero ---------- */
  var heroFondo = document.getElementById("heroFondo");
  var heroSeccion = document.getElementById("inicio");
  var soportaMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (heroFondo && soportaMotion) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        heroFondo.style.transform = "translateY(" + y * 0.18 + "px)";
      }
    }, { passive: true });
  }

  /* ---------- Pestañas de la carta ---------- */
  var pestanas = document.querySelectorAll(".carta__tab");
  var paneles = document.querySelectorAll(".carta__panel");

  pestanas.forEach(function (pestana) {
    pestana.addEventListener("click", function () {
      var destino = pestana.getAttribute("data-panel");
      pestanas.forEach(function (p) { p.classList.remove("activo"); });
      paneles.forEach(function (panel) { panel.classList.remove("activo"); });
      pestana.classList.add("activo");
      document.getElementById(destino).classList.add("activo");
    });
  });

  /* ---------- Carrusel de opiniones ---------- */
  var testimonios = document.querySelectorAll(".testimonio");
  var puntosContenedor = document.getElementById("carruselPuntos");
  var indiceActual = 0;
  var temporizadorCarrusel;

  testimonios.forEach(function (_, i) {
    var punto = document.createElement("button");
    if (i === 0) punto.classList.add("activo");
    punto.setAttribute("aria-label", "Ver opinión " + (i + 1));
    punto.addEventListener("click", function () { irATestimonio(i); });
    puntosContenedor.appendChild(punto);
  });

  var puntos = puntosContenedor.querySelectorAll("button");

  function irATestimonio(indice) {
    testimonios[indiceActual].classList.remove("activo");
    puntos[indiceActual].classList.remove("activo");
    indiceActual = (indice + testimonios.length) % testimonios.length;
    testimonios[indiceActual].classList.add("activo");
    puntos[indiceActual].classList.add("activo");
    reiniciarAutoplay();
  }

  document.getElementById("flechaAnterior").addEventListener("click", function () { irATestimonio(indiceActual - 1); });
  document.getElementById("flechaSiguiente").addEventListener("click", function () { irATestimonio(indiceActual + 1); });

  function reiniciarAutoplay() {
    clearInterval(temporizadorCarrusel);
    temporizadorCarrusel = setInterval(function () { irATestimonio(indiceActual + 1); }, 6500);
  }
  reiniciarAutoplay();

  /* ---------- Formulario de contacto (envío por WhatsApp) ---------- */
  var formulario = document.getElementById("formularioContacto");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    var nombre = document.getElementById("nombre").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();
    var texto = "Hola, soy " + nombre + " (tel. " + telefono + "). " + mensaje;
    var url = "https://wa.me/34641534080?text=" + encodeURIComponent(texto);
    window.open(url, "_blank", "noopener");
  });

  /* ---------- Banner de cookies ---------- */
  var cookiesBanner = document.getElementById("cookies");
  var CLAVE_COOKIES = "alberquillas_cookies";

  if (!localStorage.getItem(CLAVE_COOKIES)) {
    setTimeout(function () { cookiesBanner.classList.add("visible"); }, 900);
  }

  function cerrarBanner(valor) {
    localStorage.setItem(CLAVE_COOKIES, valor);
    cookiesBanner.classList.remove("visible");
  }
  document.getElementById("aceptarCookies").addEventListener("click", function () { cerrarBanner("aceptado"); });
  document.getElementById("rechazarCookies").addEventListener("click", function () { cerrarBanner("rechazado"); });

})();

function ajustarColumnas() {
    const contenedor = document.getElementById('Blog1');
    const postsBodys = contenedor.querySelectorAll('.post-body');
    postsBodys.forEach(function (postBody) {
      console.log(" body: " + postBody)
      var imagenes = postBody.getElementsByTagName("img");
      if (imagenes.length > 3) {
        console.log(imagenes)
        let caruselArray = []
        for (var i = 0; i < imagenes.length; i++) {
         
          // agregar fragmento de html al carucel
          caruselArray[i] = `
            <div class="carusel-link" href="${imagenes[i].src}" target="_blank">
              <img src="${imagenes[i].src}"/>
            </div>
          `;
          imagenes[i].style.display = "none";
        }
        // agrega la primera imagen al final tambien
        caruselArray.push(`
          <div class="carusel-link" href="${imagenes[0].src}" target="_blank">
            <img src="${imagenes[0].src}"/>
          </div>
        `);
        let htmlCarusel = caruselArray.join(""); // comvertir a texto
        postBody.insertAdjacentHTML('afterbegin', `
        <div class="imagenes-deslisables">
          <div class="carusel-cont">
            <button class="carusel-btn carusel-btn-left" onclick="moverCarusel('atras', this.parentElement)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ffffff"><path d="m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z"/></svg>
            </button>
            <button class="carusel-btn carusel-btn-right" onclick="moverCarusel('adelante', this.parentElement)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ffffff"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>
            </button>
            ${htmlCarusel}
          </div>
        </div>
        `);
      }
    });



    if (window.innerWidth < 900) return;
    const posts = contenedor.querySelectorAll('.post');
    columnasAjustadas = true // para que no vuelva a ejecutarse
    // Crear observador para detectar cambios de tamaño
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        // Si la altura supera 800px, aplicar la clase y dejar de observar ese elemento
        if (entry.contentRect.height > 800) {
          if (window.innerWidth < 900) return;
          entry.target.classList.add("dos-columnas");
          resizeObserver.unobserve(entry.target);
        }
      });
    });

    // Observar cada post
    posts.forEach(post => {
      resizeObserver.observe(post);
    });
  }
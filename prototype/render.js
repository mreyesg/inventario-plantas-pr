export function renderizarPlantas(plantas) {
  const container = document.getElementById("plantas-container");

  if (!container) return;

  if (!plantas.length) {
    container.innerHTML = "<p>No hay plantas disponibles.</p>";
    return;
  }

  container.innerHTML = plantas.map(planta => `
    <article class="planta-card">
      <div class="planta-header">
        <div class="planta-media">
          <img 
            src="${planta.imagen_principal}" 
            alt="Imagen de ${planta.nombre_comun}"
            class="planta-imagen"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="planta-imagen-placeholder" style="display:none;">
            <span>Sin imagen disponible</span>
          </div>
        </div>

        <div class="planta-resumen">
          <h2>${planta.nombre_comun}</h2>
          <p class="meta"><strong>Nombre científico:</strong> <em>${planta.nombre_cientifico}</em></p>
          <p class="resumen-breve">${planta.resumen_breve || ""}</p>
        </div>
      </div>

      <div class="planta-contenido">
        <div class="tags">
          <span class="tag">${planta.familia}</span>
          <span class="tag tag-categoria">${planta.categoria_principal}</span>
          <span class="tag tag-evidencia">${planta.nivel_evidencia}</span>
        </div>

        <div class="planta-body">
          <div class="planta-tabs">
            <div class="tabs">
              <button class="tab-button active" onclick="mostrarTab('${planta.id}', 'usos', this)">Usos</button>
              <button class="tab-button" onclick="mostrarTab('${planta.id}', 'preparacion', this)">Preparación</button>
              <button class="tab-button" onclick="mostrarTab('${planta.id}', 'advertencias', this)">Advertencias</button>
            </div>

            <div class="tab-panel" id="${planta.id}-usos">
              <ul>
                ${planta.usos_tradicionales.map(uso => `<li>${uso}</li>`).join("")}
              </ul>
            </div>

            <div class="tab-panel oculto" id="${planta.id}-preparacion">
              <p>${planta.preparacion.join(", ")}</p>
            </div>

            <div class="tab-panel oculto" id="${planta.id}-advertencias">
              <p>${planta.advertencias.length ? planta.advertencias.join(", ") : "Ninguna registrada"}</p>
            </div>
          </div>

          <aside class="planta-ciencia">
            <h3>Dimensión científica</h3>

            <div class="ciencia-bloque">
              <h4>Fitoquímica</h4>
              ${
                planta.compuestos && planta.compuestos.length
                  ? `<ul>${planta.compuestos.map(c => `<li>${c}</li>`).join("")}</ul>`
                  : `<p class="vacio">Sin compuestos registrados.</p>`
              }
            </div>

            <div class="ciencia-bloque">
              <h4>Actividad biológica</h4>
              ${
                planta.actividad_biologica && planta.actividad_biologica.length
                  ? `<ul>${planta.actividad_biologica.map(a => `<li>${a}</li>`).join("")}</ul>`
                  : `<p class="vacio">Sin actividad biológica registrada.</p>`
              }
            </div>

            <div class="ciencia-bloque">
              <h4>Notas científicas</h4>
              ${
                planta.notas_cientificas && planta.notas_cientificas.trim()
                  ? `<p>${planta.notas_cientificas}</p>`
                  : `<p class="vacio">Sin notas científicas disponibles.</p>`
              }
            </div>
          </aside>
        </div>

        <section class="planta-medios">
          <h3>Medios y recursos</h3>

          <div class="medios-grid">
            <div class="medio-bloque">
              <h4>Galería</h4>
              ${
                planta.galeria_imagenes && planta.galeria_imagenes.length
                  ? planta.galeria_imagenes.map(img => `
                    <img src="${img.url}" alt="${img.descripcion || "Imagen adicional"}" class="galeria-img" />
                  `).join("")
                  : `<p class="vacio">Sin imágenes adicionales registradas.</p>`
              }
            </div>

            <div class="medio-bloque">
              <h4>Video</h4>
              ${
                planta.videos && planta.videos.length
                  ? planta.videos.map(video => `
                    <p><strong>${video.titulo}</strong></p>
                    <a href="${video.url}" target="_blank">Ver video</a>
                  `).join("")
                  : `<p class="vacio">Sin videos registrados.</p>`
              }
            </div>

            <div class="medio-bloque">
              <h4>Recurso interactivo</h4>
              ${
                planta.recursos_interactivos && planta.recursos_interactivos.length
                  ? planta.recursos_interactivos.map(recurso => `
                    <p><strong>${recurso.titulo}</strong></p>
                    <p>${recurso.tipo}</p>
                  `).join("")
                  : `<p class="vacio">Sin recursos interactivos registrados.</p>`
              }
            </div>
          </div>
        </section>
      </div>
    </article>
  `).join("");
}
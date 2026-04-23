export function renderizarPlantas(plantas) {
  const container = document.getElementById("plantas-container");

  if (!container) return;

  if (!plantas.length) {
    container.innerHTML = "<p>No hay plantas disponibles.</p>";
    return;
  }

  container.innerHTML = plantas.map(planta => `
    <article class="planta-card">
      <h2>${planta.nombre_comun}</h2>
      <p class="meta"><strong>Nombre científico:</strong> <em>${planta.nombre_cientifico}</em></p>
      <p class="meta"><strong>Familia:</strong> ${planta.familia}</p>
      <p class="meta"><strong>Categoría principal:</strong> ${planta.categoria_principal}</p>

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
    </article>
  `).join("");
}
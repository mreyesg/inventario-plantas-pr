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
      <p class="meta"><strong>Nombre científico:</strong> ${planta.nombre_cientifico}</p>
      <p class="meta"><strong>Familia:</strong> ${planta.familia}</p>
      <p class="meta"><strong>Categoría principal:</strong> ${planta.categoria_principal}</p>
      <p><strong>Usos tradicionales:</strong></p>
      <ul class="lista">
        ${planta.usos_tradicionales.map(uso => `<li>${uso}</li>`).join("")}
      </ul>
      <p><strong>Preparación:</strong> ${planta.preparacion.join(", ")}</p>
      <p><strong>Advertencias:</strong> ${planta.advertencias.length ? planta.advertencias.join(", ") : "Ninguna registrada"}</p>
    </article>
  `).join("");
}
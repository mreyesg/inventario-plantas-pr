import { cargarPlantas } from "./data-loader.js";
import { renderizarPlantas } from "./render.js";

async function iniciarApp() {
  try {
    const plantas = await cargarPlantas();
    renderizarPlantas(plantas);
  } catch (error) {
    console.error(error);
    const container = document.getElementById("plantas-container");
    if (container) {
      container.innerHTML = `<p>Error al cargar las plantas.</p>`;
    }
  }
}

window.mostrarTab = function(plantaId, tabNombre, boton) {
  const paneles = [
    `${plantaId}-usos`,
    `${plantaId}-preparacion`,
    `${plantaId}-advertencias`
  ];

  paneles.forEach(id => {
    const panel = document.getElementById(id);
    if (panel) {
      panel.classList.add("oculto");
    }
  });

  const panelActivo = document.getElementById(`${plantaId}-${tabNombre}`);
  if (panelActivo) {
    panelActivo.classList.remove("oculto");
  }

  const grupoTabs = boton.parentElement;
  const botones = grupoTabs.querySelectorAll(".tab-button");
  botones.forEach(btn => btn.classList.remove("active"));
  boton.classList.add("active");
};

iniciarApp();
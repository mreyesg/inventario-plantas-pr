import { cargarPlantas } from "./data-loader.js";
import { renderizarPlantas } from "./render.js";

let plantasOriginales = [];

async function iniciarApp() {
  try {
    plantasOriginales = await cargarPlantas();
    renderizarPlantas(plantasOriginales);
    configurarBusqueda();
  } catch (error) {
    console.error(error);
    const container = document.getElementById("plantas-container");
    if (container) {
      container.innerHTML = `<p>Error al cargar las plantas.</p>`;
    }
  }
}

function configurarBusqueda() {
  const input = document.getElementById("busqueda");
  if (!input) return;

  input.addEventListener("input", () => {
    const termino = input.value.toLowerCase().trim();

    const filtradas = plantasOriginales.filter(planta =>
      planta.nombre_comun.toLowerCase().includes(termino) ||
      planta.nombre_cientifico.toLowerCase().includes(termino)
    );

    renderizarPlantas(filtradas);
  });
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
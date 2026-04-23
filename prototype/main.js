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

iniciarApp();
export async function cargarPlantas() {
  const response = await fetch("../data/plantas.json");

  if (!response.ok) {
    throw new Error("No se pudieron cargar los datos de las plantas.");
  }

  const plantas = await response.json();
  return plantas;
}
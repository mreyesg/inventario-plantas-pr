const fs = require("fs");
const path = require("path");

const fichasDir = path.join(__dirname, "..", "content", "fichas-estudiantes");
const salidaJson = path.join(__dirname, "..", "data", "plantas.json");

function leerLista(texto) {
  return texto
    .split("\n")
    .map(linea => linea.trim())
    .filter(linea => linea.startsWith("-"))
    .map(linea => linea.replace("-", "").trim())
    .filter(Boolean);
}

function extraerCampo(contenido, nombreCampo) {
  const regex = new RegExp(`^${nombreCampo}:\\s*(.*)$`, "m");
  const match = contenido.match(regex);
  return match ? match[1].trim() : "";
}

function extraerSeccion(contenido, titulo) {
  const regex = new RegExp(`## .*${titulo}[\\s\\S]*?(?=\\n## |$)`, "i");
  const match = contenido.match(regex);
  return match ? match[0] : "";
}

function extraerResumen(contenido) {
  const seccion = extraerSeccion(contenido, "Resumen museográfico");
  return seccion
    .replace(/^## .*Resumen museográfico.*$/m, "")
    .replace(/\(resumen_breve\)/g, "")
    .trim();
}

function parsearFicha(rutaArchivo) {
  const contenido = fs.readFileSync(rutaArchivo, "utf8");

  const usoTradicional = extraerSeccion(contenido, "Uso tradicional");
  const ciencia = extraerSeccion(contenido, "Dimensión científica");
  const seguridad = extraerSeccion(contenido, "Seguridad");
  const referencias = extraerSeccion(contenido, "Referencias y archivo");
  const medios = extraerSeccion(contenido, "Medios");
  const metadatos = extraerSeccion(contenido, "Metadatos");

  return {
    id: extraerCampo(contenido, "id"),
    nombre_comun: extraerCampo(contenido, "nombre_comun"),
    nombre_cientifico: extraerCampo(contenido, "nombre_cientifico"),
    familia: extraerCampo(contenido, "familia"),
    nombres_alternos: extraerCampo(contenido, "nombres_alternos")
      ? extraerCampo(contenido, "nombres_alternos").split(",").map(x => x.trim())
      : [],

    categoria_principal: extraerCampo(contenido, "categoria_principal"),
    categorias_secundarias: extraerCampo(contenido, "categorias_secundarias")
      ? extraerCampo(contenido, "categorias_secundarias").split(",").map(x => x.trim())
      : [],

    usos_tradicionales: leerLista(usoTradicional.match(/usos_tradicionales:[\s\S]*?parte_usada:/)?.[0] || ""),
    parte_usada: leerLista(usoTradicional.match(/parte_usada:[\s\S]*?preparacion:/)?.[0] || ""),
    preparacion: leerLista(usoTradicional.match(/preparacion:[\s\S]*?contexto_cultural:/)?.[0] || ""),
    contexto_cultural: extraerCampo(usoTradicional, "contexto_cultural"),
    observaciones_tradicionales: extraerCampo(usoTradicional, "observaciones_tradicionales"),

    resumen_breve: extraerResumen(contenido),

    nivel_evidencia: extraerCampo(ciencia, "nivel_evidencia"),
    compuestos: leerLista(ciencia.match(/compuestos:[\s\S]*?actividad_biologica:/)?.[0] || ""),
    actividad_biologica: leerLista(ciencia.match(/actividad_biologica:[\s\S]*?notas_cientificas:/)?.[0] || ""),
    notas_cientificas: extraerCampo(ciencia, "notas_cientificas"),

    advertencias: leerLista(seguridad.match(/advertencias:[\s\S]*?interacciones:/)?.[0] || ""),
    interacciones: leerLista(seguridad.match(/interacciones:[\s\S]*?contraindicaciones:/)?.[0] || ""),
    contraindicaciones: leerLista(seguridad.match(/contraindicaciones:[\s\S]*?poblaciones_riesgo:/)?.[0] || ""),
    poblaciones_riesgo: leerLista(seguridad.match(/poblaciones_riesgo:[\s\S]*/)?.[0] || ""),

    fuentes_historicas: leerLista(referencias.match(/fuentes_historicas:[\s\S]*?nomenclatura_antigua:/)?.[0] || ""),
    nomenclatura_antigua: leerLista(referencias.match(/nomenclatura_antigua:[\s\S]*?referencias:/)?.[0] || ""),
    referencias: leerLista(referencias.match(/referencias:[\s\S]*/)?.[0] || ""),

    imagen_principal: extraerCampo(medios, "imagen_principal"),
    galeria_imagenes: [],
    videos: [],
    audio: [],
    recursos_interactivos: [],

    ficha_markdown: `content/fichas-estudiantes/${path.basename(rutaArchivo)}`,
    autor: extraerCampo(metadatos, "autor"),
    fecha_actualizacion: extraerCampo(metadatos, "fecha_actualizacion"),
    estado_editorial: extraerCampo(metadatos, "estado_editorial") || "borrador"
  };
}

function generarJson() {
  if (!fs.existsSync(fichasDir)) {
    console.error("No existe la carpeta:", fichasDir);
    process.exit(1);
  }

  const archivos = fs
    .readdirSync(fichasDir)
    .filter(nombre => nombre.endsWith(".md"));

  const plantas = archivos.map(nombre =>
    parsearFicha(path.join(fichasDir, nombre))
  );

  fs.writeFileSync(salidaJson, JSON.stringify(plantas, null, 2), "utf8");

  console.log(`JSON generado correctamente con ${plantas.length} planta(s).`);
}

generarJson();
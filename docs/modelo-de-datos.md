# Modelo de datos — Ficha de planta medicinal

Este modelo busca documentar cada planta como una ficha estructurada, extensible y compatible con una futura implementación en WordPress.

## Principios del modelo

- Separar contenido, estructura y medios
- Permitir campos vacíos sin romper la ficha
- Preparar desde ahora la incorporación futura de imágenes, videos y recursos interactivos
- Facilitar crecimiento progresivo del inventario

---

## 1. Identificación

- `id`: identificador único, sin espacios, en minúsculas
- `nombre_comun`: nombre principal usado en la ficha
- `nombre_cientifico`: denominación científica
- `familia`: familia botánica
- `nombres_alternos`: lista de otros nombres comunes o regionales

---

## 2. Clasificación

- `categoria_principal`: categoría general dominante
- `categorias_secundarias`: lista de categorías adicionales

Ejemplos:
- respiratorio
- digestivo
- dermatológico
- inmunológico
- nervioso

---

## 3. Uso tradicional

- `usos_tradicionales`: lista de usos medicinales reportados
- `parte_usada`: lista de partes de la planta utilizadas
- `preparacion`: lista de formas de preparación
- `contexto_cultural`: nota breve sobre uso tradicional o contexto local
- `observaciones_tradicionales`: comentarios adicionales
- `resumen_breve`: síntesis interpretativa que integra uso medicinal, contexto cultural y relevancia en Puerto Rico
---

## 4. Dimensión científica

- `nivel_evidencia`: nivel general de evidencia disponible
- `compuestos`: lista de compuestos o grupos químicos
- `actividad_biologica`: lista de actividades reportadas
- `notas_cientificas`: comentario breve

Valores sugeridos para `nivel_evidencia`:
- tradicional
- reportado
- analitico

---

## 5. Seguridad

- `advertencias`: lista de advertencias generales
- `interacciones`: lista de posibles interacciones
- `contraindicaciones`: lista de contraindicaciones
- `poblaciones_riesgo`: lista de poblaciones con precaución especial

---

## 6. Archivo histórico y referencias

- `fuentes_historicas`: lista de fuentes históricas o documentales
- `nomenclatura_antigua`: lista de nombres antiguos si aplica
- `referencias`: lista de referencias bibliográficas o documentales

---

## 7. Medios

- `imagen_principal`: ruta relativa de la imagen principal
- `galeria_imagenes`: lista de imágenes adicionales
- `videos`: lista de objetos de video
- `audio`: lista de objetos de audio
- `recursos_interactivos`: lista de objetos interactivos, incluyendo H5P

### Estructura sugerida para `videos`
- `tipo`
- `titulo`
- `url`

### Estructura sugerida para `recursos_interactivos`
- `tipo`
- `titulo`
- `embed`

---

## 8. Metadatos editoriales

- `ficha_markdown`: ruta a la ficha extensa en Markdown
- `autor`: responsable principal de la ficha
- `fecha_actualizacion`: fecha de última revisión
- `estado_editorial`: estado general de la ficha

Valores sugeridos para `estado_editorial`:
- borrador
- revision
- validada

---

## Estrategia de actualización

Si en el futuro se añade un campo nuevo:

1. se incorpora al modelo general
2. las fichas anteriores pueden dejarlo vacío
3. la interfaz solo debe mostrar secciones con contenido disponible

Esto permite crecimiento progresivo sin rehacer fichas previas.
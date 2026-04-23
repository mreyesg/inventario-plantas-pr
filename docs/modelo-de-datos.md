# Modelo de datos — Planta medicinal

Cada planta se representará como un objeto estructurado con los siguientes campos:

## Identificación
- id (string único, sin espacios)
- nombre_comun
- nombre_cientifico
- familia

## Clasificación
- categoria_principal (ej: digestivo, respiratorio)
- categorias_secundarias (lista)

## Uso tradicional
- usos_tradicionales (lista)
- parte_usada (lista)
- preparacion (lista)

## Dimensión científica
- nivel_evidencia (tradicional, reportado, analítico)
- compuestos (lista opcional)

## Seguridad
- advertencias (lista)

## Recursos
- imagen (ruta relativa)
- ficha_markdown (ruta al archivo en /content)

## Metadatos
- autor
- referencias (lista)
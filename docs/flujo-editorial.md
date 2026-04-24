# Flujo Editorial — Inventario de Plantas Medicinales

## 1. Propósito del sistema

Este sistema tiene como objetivo permitir la construcción progresiva de un inventario digital de plantas medicinales de Puerto Rico mediante un modelo de **co-creación académica supervisada**, donde estudiantes generan contenido que es posteriormente validado por un curador.

El sistema busca:

* Facilitar la entrada de datos sin requerir conocimiento técnico
* Garantizar calidad mediante revisión humana
* Construir un repositorio sostenible y escalable
* Integrar investigación, docencia y divulgación

---

## 2. Principio fundamental

> El estudiante genera contenido.
> El sistema organiza.
> El curador valida.
> El museo publica.

---

## 3. Roles del sistema

### 3.1 Estudiante

Responsabilidades:

* Investigar una o varias plantas
* Completar la ficha utilizando el formulario o plantilla
* Incluir:

  * Identificación
  * Resumen museográfico
  * Usos tradicionales
  * Preparación
  * Seguridad
  * Medios (imágenes, enlaces, etc.)
* Validar su trabajo mediante una vista previa
* Someter la ficha para evaluación

No puede:

* Publicar contenido directamente
* Modificar fichas ya publicadas

---

### 3.2 Curador

Responsabilidades:

* Revisar fichas sometidas
* Evaluar:

  * coherencia
  * claridad
  * calidad conceptual
  * consistencia con el modelo
* Decidir:

  * aprobar publicación
  * solicitar revisión
  * rechazar ficha
  * actualizar ficha existente

Tiene control sobre:

* Publicación final
* Sustitución de fichas
* Integración de contenido nuevo con existente

---

### 3.3 Profesor

Responsabilidades:

* Dar seguimiento a las contribuciones de sus estudiantes
* Evaluar el proceso de investigación y redacción
* Utilizar las fichas como evidencia de aprendizaje
* Otorgar calificación

---

### 3.4 Museo / Repositorio

Responsabilidades:

* Mantener el repositorio activo
* Garantizar coherencia editorial
* Conservar versiones publicadas
* Servir como recurso educativo y divulgativo

---

## 4. Flujo de trabajo

### 4.1 Creación de ficha

```text
Estudiante investiga
↓
Completa formulario / plantilla
↓
Genera vista previa
↓
Valida visualmente
```

---

### 4.2 Envío

```text
Estudiante somete ficha
↓
Estado: pendiente de revisión
```

---

### 4.3 Evaluación

```text
Curador recibe ficha
↓
Analiza contenido
↓
Decide acción
```

Opciones:

* Aprobar → pasa a publicado
* Solicitar cambios → regresa a estudiante
* Rechazar → se descarta
* Integrar → se fusiona con ficha existente

---

### 4.4 Publicación

```text
Ficha aprobada
↓
Estado: publicada
↓
Visible en el museo
```

---

## 5. Manejo de duplicados (IDs)

Cada planta tiene un identificador único (`id`).

Si una nueva ficha utiliza un `id` existente:

El sistema debe ofrecer al curador:

* Sustituir ficha existente
* Fusionar contenido
* Mantener ambas versiones
* Rechazar actualización

---

## 6. Validación por el estudiante

Antes de someter, el estudiante debe poder:

* Ver la ficha como aparecerá publicada
* Confirmar:

  * que las imágenes cargan correctamente
  * que el texto es legible
  * que los campos están completos
  * que la estructura es coherente

Esto reduce errores y carga del curador.

---

## 7. Estructura de la ficha

Cada ficha debe contener:

### Nivel 1 — Identidad

* Nombre común
* Nombre científico
* Imagen principal
* Resumen museográfico

### Nivel 2 — Uso

* Usos tradicionales
* Preparación
* Advertencias

### Nivel 3 — Profundización

* Dimensión científica
* Medios adicionales
* Referencias

---

## 8. Estados editoriales

* borrador
* pendiente de revisión
* en revisión
* aprobado
* publicado
* rechazado

---

## 9. Principios de diseño

* Separación entre contenido y estructura
* Validación previa por el usuario
* Control editorial centralizado
* Escalabilidad del modelo de datos
* Flexibilidad para añadir nuevos campos
* Interfaz amigable para no expertos

---

## 10. Evolución del sistema

Fase actual:

```text
Markdown → Parser → JSON → Interfaz
```

Fase futura:

```text
Formulario web → Base de datos → Interfaz pública
```

---

## 11. Valor académico

Este sistema permite:

* Evidenciar procesos de investigación
* Evaluar comprensión conceptual
* Integrar narrativa y ciencia
* Promover producción de conocimiento
* Construir un archivo colectivo

---

## 12. Conclusión

Este proyecto no es únicamente un inventario, sino un sistema de mediación del conocimiento donde:

* el estudiante investiga
* el sistema estructura
* el curador valida
* el museo preserva

---

# Modelo Operativo — Inventario de Plantas Medicinales

## 1. Objetivo

Traducir el flujo editorial en una implementación técnica concreta que permita:

* Entrada de datos mediante formulario web
* Validación por roles (estudiante, curador, profesor)
* Publicación controlada
* Escalabilidad del sistema

---

## 2. Arquitectura general

```text
Frontend (Formulario + Vista previa)
↓
WordPress (Gestión de contenido)
↓
Base de datos (Posts + campos personalizados)
↓
Frontend público (Museo digital)
```

---

## 3. Plataforma base

Sistema recomendado:

👉 WordPress

Razones:

* Soporte de roles de usuario
* Sistema de estados editoriales
* Integración con formularios
* Gestión de medios (imágenes, video)
* Escalabilidad
* Compatibilidad con H5P

---

## 4. Componentes principales

### 4.1 Tipo de contenido (Custom Post Type)

Crear:

```text
Planta
```

Cada planta será un post con campos personalizados.

---

### 4.2 Campos personalizados

Usar:

👉 Advanced Custom Fields

Campos a definir:

#### Identificación

* nombre_comun
* nombre_cientifico
* familia
* nombres_alternos

#### Clasificación

* categoria_principal
* categorias_secundarias

#### Narrativa

* resumen_museografico

#### Uso

* usos_tradicionales
* parte_usada
* preparacion
* contexto_cultural
* observaciones_tradicionales

#### Ciencia

* nivel_evidencia
* compuestos
* actividad_biologica
* notas_cientificas

#### Seguridad

* advertencias
* interacciones
* contraindicaciones
* poblaciones_riesgo

#### Medios

* imagen_principal
* galeria_imagenes
* videos
* recursos_interactivos

#### Metadatos

* autor
* estado_editorial
* fecha_actualizacion

---

### 4.3 Formularios frontend

Usar:

👉 WP User Frontend
(o equivalente)

Permite:

* estudiantes llenan ficha sin acceder al backend
* envío directo como post tipo "Planta"
* estado inicial: **pendiente de revisión**

---

### 4.4 Estados editoriales

Usar sistema nativo de WordPress:

* Draft (borrador)
* Pending Review (pendiente)
* Published (publicado)

Opcional: extender con estados personalizados.

---

### 4.5 Roles de usuario

Definir:

#### Estudiante

* crear fichas
* editar sus fichas
* no publicar

#### Curador

* editar cualquier ficha
* aprobar/rechazar
* publicar

#### Profesor

* ver fichas de estudiantes
* comentar/evaluar (opcional)

#### Administrador

* control total del sistema

---

## 5. Flujo técnico

### 5.1 Entrada

```text
Estudiante llena formulario
↓
Envía ficha
↓
Se guarda como "pending"
```

---

### 5.2 Validación

```text
Curador accede al backend
↓
Revisa ficha
↓
Decide acción
```

---

### 5.3 Publicación

```text
Curador aprueba
↓
Estado: published
↓
Visible en frontend
```

---

## 6. Vista previa

Idealmente el formulario debe incluir:

* preview en tiempo real
* o botón “ver ficha”

Opciones:

* plantilla frontend replicando el diseño actual
* shortcode de vista previa

---

## 7. Manejo de duplicados

Estrategias:

### Opción 1 (simple)

* permitir duplicados
* curador decide manualmente

### Opción 2 (recomendada)

* validar `id` o nombre científico
* advertir al curador

---

## 8. Gestión de medios

WordPress permite:

* subir imágenes directamente
* crear galerías
* insertar videos (YouTube/Vimeo)
* integrar H5P

Para H5P usar:

👉 H5P

---

## 9. Frontend del museo

Debe replicar el prototipo actual:

* ficha con:

  * imagen
  * resumen
  * tabs
  * dimensión científica
  * medios

Se puede implementar con:

* theme personalizado
* o page builder ligero

---

## 10. Seguridad y control

* acceso con login para estudiantes
* roles restringidos
* revisión obligatoria antes de publicar
* sanitización de inputs (plugins ayudan)

---

## 11. Integración futura

Posibles extensiones:

* API REST para exportar datos
* conexión con Notion o Airtable
* visualización geográfica
* filtros avanzados
* exportación académica

---

## 12. Transición desde prototipo actual

Estado actual:

```text
Markdown → Parser → JSON → Interfaz
```

Transición:

```text
Formulario → Base de datos → Interfaz
```

El modelo de datos ya está definido gracias al prototipo.

---

## 13. Principio operativo

> El sistema debe minimizar la carga técnica del usuario
> y maximizar la calidad del contenido mediante revisión humana

---

## 14. Conclusión

Este modelo permite:

* participación estudiantil masiva
* control curatorial
* crecimiento sostenido del repositorio
* integración real entre docencia e investigación

---

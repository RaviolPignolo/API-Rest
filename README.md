# API-Rest
Universidad del Chubut
Materia Calidad y Gestión del Proceso de Software

## Integrantes
Lucas Isaac Soto
Leandro Pérez Pignolo
Luciando Damian Gil

## Actividad
Aplicar los conceptos de Gestión de Configuración del Software mediante el desarrollo colaborativo de una API REST simple, utilizando Git y GitHub. El objetivo es trabajar con ramas, commits, merge, resolución de conflictos e identificación de ítems de configuración, comprendiendo cómo evoluciona un proyecto de software de manera controlada.

Para esta actividad se hara uso de la tecnologia nodejs con express. Se busco crear una API REST simple para ejercitar el trabajo colaborativo atravez de git y github. Para esta API REST generaremos 3 endpoints, cada integrante haciendo uso de las ramas de git desarrollara cada uno para finalmente integrar todos los cambios a la rama principal y gestionar los posibles conflictos del mergeo de las ramas.

La API REST gestionara Tareas, las cuales tienen un id, titulo y estado completada. Para esta API REST nos interesa, recuperar tareas por id, listar todas las tareas y poder crear nuevas tareas.

## Requisitos e Instalación

Para ejecutar el proyecto de manera local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/RaviolPignolo/API-Rest.git](https://github.com/RaviolPignolo/API-Rest.git)

2. **Instalar las librerías necesarias**
    npm install

3. **Iniciar la API**
    node app.js


## End Points
Método,Endpoint,Descripción
    GET,/api/tareas,trae todas las tareas
    GET,/api/tareas/:id,busca una tarea por su ID
    POST,/api/tareas,crea una tarea nueva

## items de configuracion

**Código Fuente (Software):**

    app.js: Punto de entrada de la aplicación

    Carpeta routes/: Definición de los caminos de la API

    Carpeta controllers/: Lógica de negocio de cada endpoint

    Carpeta models/: Estructura y manejo de los datos

**Archivos de Gestión de Dependencias:**

    package.json: Registro de librerías necesarias (Express) y scripts de ejecución.

    package-lock.json: Garantiza que todos los integrantes instalen exactamente las mismas versiones de las librerías

**Documentación Técnica:**

    README.md: Manual de instalación, uso y descripción del proyecto

**Configuración** del Repositorio:**

    .gitignore: Archivo que define qué elementos NO deben versionarse (como la carpeta node_modules).    
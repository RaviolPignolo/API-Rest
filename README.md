# API-Rest

## Integrantes
Lucas Isaac Soto
Leandro Pérez Pignolo
Luciando Damian Gil

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
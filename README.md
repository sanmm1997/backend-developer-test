<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

## Prueba técnica Backend Developer Php

Esta prueba contiene un CRUD de usuarios y clientes. Para el desarrollo de esta, se utilizaron las siguientes tecnologías.

- Creación de la API con **Laravel** v7
- Autenticación con API **JWT**
- Implementación de la interfaz de usuario con **ReactJs**

## Instrucciones de instalación

Por favor siga las instrucciones de intalación para lanzar el proyecto. 

**Importante**: 
1. El puerto para servir el proyecto debe ser el 8000.
2. El equipo debe contar con los requisitos para correr una aplicación en Laravel v7 y una base de datos MYSQL. 
3. Crear una base de datos nueva para el proyecto.

**Instalación**
1. Clone el repositorio en la carpeta que desea de su equipo.
2. Diríjase a la carpeta y copie el archivo ".env.example" con el nombre ".env"
3. En el archivo que acaba de copiar (.env), establezca las variables de entorno para conectarse a la base de datos creada anteriormente. Es importante que configure las siguientes variables:
    1. DB_HOST
    2. DB_PORT
    3. DB_DATABASE
    4. DB_USERNAME
    5. DB_PASSWORD
4. Desde la terminal de comandos diríjase a la carpeta en la que clonó el repositorio.
5. Ejecute los siguientes comandos:
    1. composer install
    2. npm install
    3. **Si falla el comando anterior** ejecutar "rm -rf node_modules/" y después volver a ejecutar "npm install" 
    4. npm run production
    5. php artisan key:generate
    6. php artisan jwt:secret
    7. php artisan config:cache
    8. php artisan migrate
    9. php artisan db:seed
6. Inicie el servidor para ver el proyecto con el comando "php artisan serve --port=8000". 
7. Valide que el proyecto se lanzó en http://localhost:8000 y abra la URL en su navegador web.


## Adicional

Esta prueba es desarrollada por Santiag Marulanda Molina - Backend Developer Php

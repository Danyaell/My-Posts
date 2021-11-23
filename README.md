# My-Posts
### Proyecto de ejemplo para el curso de NodeJs REST APIs - Proyects [Express + Swagger + MySQL].

Este proyecto es el BackEnd de una applicación que permite crear usuarios, ingresar con uno, crear posts, comentarlos, darles like o dislike y eliminarlos, así como poder visualizar todos los posts y sus comentarios.

Para crearlo se utilizaron las tecnologías de NodeJs, para poder utilizar JavaScript y crear las rutas, controladores y servicios de cada función. También se utilizó Express para poder desarrollarla. La base de datos fue creada en Heroku, siendo una BD SQL, por lo cual también se hace uso de paqueterías de MySQL.

La aplicación está documentada con Swagger para su fácil entendimiento en FrontEnd.

## Bitácora

### 19 de Noviembre del 2021
##### 19:37 Se creó el repositorio.

##### 20:55 Se hizo push del proyecto con Express integrado.

##### 21:01 Se integró staging a main exitosamente.

##### 24:10 Se creó el paquete /test, se recibe un request y se manda un response.

##### 21:24 Se installa la extensión nodemon y se modifica el archivo package.json para configurar la extensión.
###### npm install --save-dev nodemon

##### 21:35 Se hace comit y push del proyecto para actualizar.

### 20 de Noviembre del 2021
##### 16:45 Se crea el archivo db.config.js para configurar la conexión a la base de datos. Esta está creada en Heroku y es una base SQL. También se instaló sql en nuestro proyecto:
###### npm install --save sql

##### 17:05 Se hizo commit del proyecto y push.

##### 20:05 Se crearon los módulos de routes, controllers y services para users y posts.

### 21 de Noviembre del 2021

##### 13:04 Se crea el código de todo el servicio, control y route de /register.

##### 13:08 Se instaló bodyParser para la lectura de los datos en el body de la app.

##### 13:10 Se hace commit del proyecto y se actualiza en el repositorio de GitHub.

##### 14:28 Se agregan los paquetes de Swagger.

##### 14:42 Se utiliza la API de Swagger para documentar la aplicación para el desarrollo de FrontEnd.

### 22 de Noviembre del 2021

##### 19:13 Se añade la funcionalidad a la creación de un post, añadiendo código en route, controller y service.

### 23 de Noviembre del 2021

##### 15:03 Se agregaron las funcionalidades para comentar, dar like, dislike y obtener los posts y comentarios.

##### 15:10 Se hace commit del proyecto
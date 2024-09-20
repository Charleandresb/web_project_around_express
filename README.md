# Tripleten web_project_around_express

Este proyecto da los primeros pasos para crear un servidor
para Around the USA.

Se utilizó el framework Express para ensamblar el servidor y
desplegarlo con mayor rapidez debido a la versatilidad de sus
funcionalidades implementadas.

La distribución de archivos en el proyecto está hecha con
JavaScript modular en lugar de CommonJS, ya que utilizar módulos
es una práctica más actualizada.

Incorporación del linter Eslint con sus reglas configuradas para
permitir el uso de guiones bajos, por ejemplo para el importante id,
console.log y saltos de línea.

Hot reload a través de Nodemon para reiniciar el servidor cuando
se hagan cambios en el código de los archivos del proyecto.

El punto de entrada del servidor es app.js, se usó una variable de
entorno para especificar el numero de puerto en el cual correrá
el servidor. Aquí se inicializa el servidor en la variable app, la
cual a través del método use utiliza los middleware necesarios
para la correcta ejecución del servidor.

El directorio data almacena los archivos json que contienen los
datos de los usuarios y las cartas. Estos datos son enviados
a través de las peticiones GET que se especifican en los archivos
contenidos en el directorio routes.

El empaquetador de rutas Router proporcionado por Express, permite
utilizar el método get para especificar las rutas de las peticiones
y crear la lógica para cada una de ellas.

Se utilizó el módulo fs para interactuar con el sistema de archivos,
y así, a través de su método readFile poder leer los datos de los
archivos json; si hay un error de registra en la consola, si no lo hay
se envían los datos solicitados.

Para la solicitud de un usuario en especifico a través de su id, se
empleó el uso de una ruta dinámica. Se utiliza el método find en
los datos para comprobar si el id de usuario es igual al parámetro
de solicitud de la ruta dinámica; si no es así se envía un mensaje
de error con su estado (404 not found), si los id coinciden se envía
la información del usuario solicitado.

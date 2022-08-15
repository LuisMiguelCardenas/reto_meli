# Meli app

<img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus.png" alt="logo mercado libre"/>

Este protyecto está estructurado para relaizar las funciones de búsqueda de los productos de prueba de mercadolibre con su pagina de detalles del proeduto.

El proyecto funciona como una SPA cuya base es React. 

Las tecnologias empleadas en el proyecto son:

- React js 18.2.0,
Es el corazon del proyecto
- TypeScript 4.7.4,
Se emplea Typescript para tipar el lenguaje js con el proposito de ser una ayuda en el desarrollo contribuir a la escalabilidad y mantenimiento del código.
- Redux 4.2.0,
Se emplea para almancenar el estado de manera general, para este caso las diferentes busquedas mediante la variable `inputSearch`. 
- Sass 1.54.3,
Como procesador de CSS
- React Router Dom 6.3.0,
Se emplea para manejar las rutas del proyecto. 
- Fontawesome 6.1.2,
Libreria de iconos

## Estructura
- node_modules, dependencias del proyecto
- public, index.html e imagenes publicas del proyecto
- src, Compuesto por:
    - actions
Acciones del manejador de estado
    - interfaces
Interfaces 
    - pages
Paginas del proyecto
    - reducers
Metodos del manejador de estado
    - router
Rutas del proyecto
    - services
Aloja los endpoints y los metodos para hacer los llamados mediante Fetch
    - store
store de redux
    - styles
Todos los estilos están en esta carpeta, dividida en los estilos de los componentes y las variables de sass
    - ui, 
Se alojan los componenetes de la interfaz de usuario



## Scripts

En el directorio del proyecto usar el script

### `npm start`

Para ejecutar el proyecto en el modo de desarrollo en el buscador en el puerto 3000
[http://localhost:3000](http://localhost:3000)

### `npm run build`

Crea el proyecto en produccion


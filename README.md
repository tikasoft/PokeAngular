# PokeAngular

* Explicar conceptos:
  - Programación web
  - HTML5, CSS3, Javascript
  - Angular
  - Angular cli
  - Visual Studio Code

* Instalación
  - Descargar e instalar NodeJS: https://nodejs.org/es/download/
  - Instalar Angular CLI
```
    npm install -g @angular/cli
```

* Crear proyecto (iniciar con este punto para que la descarga de los módulos se de mientras se da el codelab)

```
    ng new PokeAngular
```

* Mostrar la estructura del proyecto
  - Abrir proyecto con Visual Studio Code
  - Mostrar estructura de carpetas
  - Mostrar diagrama con la estructura

## Code time
  - Mostrar el template inicial
```
    ng serve
```
  - Crear módulo y explicar estructura
```
    ng generate component pokedex
```
  - Crear Estructura HTML
    - Navbar
    - Cards (foto, número, nombre)
    - Modal (foto, número, nombre, descripción)
  - Explicar lo que es el módulo
  - Crear un array con los datos
  - Bind del array con la vista

## Si alcanza el tiempo

  - Crear servicio (explicar lo que es y qué haremos con él)
```
    ng generate service pokeservice
```
  - Crear un JSON con el array
  - Consumir el JSON desde el servicio
  - Explicar porque se creo el servicio
  - Explicar lo que es una API
  - Mostrar la API que usaremos
  - Modificar el servicio para consumir la API
![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Módulo 2: Ejercicio de evaluación final

## Enunciado

El ejercicio consiste en desarrollar una aplicación web de búsqueda de series de anime, que nos permite
des/marcar las series como favoritas y guardarlas en local storage.
El ejercicio también tiene una parte de maquetación con HTML y Sass, os recomendamos dedicar esfuerzo
a la maquetación una vez terminada la parte de JavaScript, ya que los criterios de evaluación están
relacionados con esta última.
Hitos del ejercicio:

### Hitos del ejercicio:
1. **Estructura básica**
En primer lugar hay que realizar una estructura básica sobre este modelo. No hay que preocuparse por las
medidas, colores ni tipografía hasta un hito posterior.

La aplicación de búsqueda de serie anime consta de dos partes:
 - Un campo de texto y un botón para buscar series por su título.
 - Un listado de resultados de búsqueda donde aparece el cartel de la serie y   el título.
2. **Búsqueda**

- Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de Jikan para la
búsqueda de series de anime. Os recomendamos echar un vistazo al JSON que devuelve una
petición de búsqueda para ver qué datos son los que necesitamos: https://api.jikan.moe/v4/anime?
q=naruto
- Para construir la URL de búsqueda hay que recoger el texto que ha introducido la usuaria en el
campo de búsqueda y concatenarlo a la dirección del API.
- Por cada serie contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos
una imagen de la serie y el título.
- Algunas de las series que devuelve el API no tienen imagen sobre el anime y viene como dirección de
la imagen la siguiente: "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png".
Debemos detectar esos casos y poner nuestra propia imagen de relleno con el servicio de
placeholder.com donde en la propia URL indicamos el tamaño, colores, texto:
https://via.placeholder.com/210x295/ffffff/666666/?text=TV.
- Para pintar la información en la página se puede elegir entre hacerlo de forma básica con innerHTML
o manipulando de forma avanzada el DOM.

3. **Favoritos**
Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son sus series favoritas. Para
ello, al hacer clic sobre una serie debe pasar lo siguiente:

- El color de fondo y el de fuente se intercambian, indicando que es una serie favorita.
- Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda,
con las series favoritas. Os recomendamos crear un variable o constante de tipo array en JS para
almacenar las series favoritas.
- Las series favoritas deben seguir apareciendo a la izquierda aunque la usuaria realice otra búsqueda.

3. **Almacenamiento local**
Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado
de favoritos se debe mostrarse.


#### Entrega

El límite de entrega es el lunes 22 de enero a las 14

Solo debéis hacer commits y merges en la rama master de vuestro repositorio hasta la fecha límite. Si después del ejercicio queréis seguir trabajando sobre el ejercicio, lo podéis hacer en otra rama y no debéis
combinarla (merge) hasta que los profesores os lo indiquen.

La evaluación solo se considerará terminada cuando:

* Esté publicada en GitHub Pages y esté funcionando.
* El enlace a GitHub Pages esté en la página página principal del repositorio, en la parte superior, al lado de la descripción.


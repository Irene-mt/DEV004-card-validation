# Tarjeta de crédito válida

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Diseño](#2-Diseño)
* [3. Funcionalidad](#4-Funcionalidad)

## 1. Resumen del proyecto
PROJECT CARD VALIDATION es una página web, que utiliza cómo base el algoritmo de Luhn para verificar si una tarjeta de crédito es válida o no. Además de una función que enmáscara los números de la tarjeta (a excepción de los últimos 4).

En este caso, se trata de la página web de "Femme Club", que es un espacio recreativo para mujeres, dónde uno de los requisitos es tener una tarjeta de crédito compatible con sus servidores. 

## 2. Diseño
Al ingresar a la aplicacion web, podrás encontrar el nombre de "Femme club", además de un mensaje de bienvenida que explica el objetivo de este espacio y una lista de los requisitos que deben cumplir las mujeres para poder ser parte del club. 

Se muestran diversas imágenes de mujeres en diferentes espacios y actividades, con el fin de mostrar esta gran diversidad, y animar a quién vea la página web a que quiera formar parte de este club.

## 3. Funcionalidad
En la lista de requisitos dónde se menciona que debes contar con una tarjeta de crédito, hay un link que te lleva a la parte inferior de la página, dónde podras ingresar el número de tarjeta para validar si es compatible con los servidores. Este campo no te permite ingresar letras, ni validar si el campo está vacío o si contiene menos de 15 carácteres.

Una vez ingresada la información, das click en el botón de "Validar tarjeta". Esto te arrojará un mensaje con el número de tarjeta enmascarado, diciendo si es aceptada o no. 

En el caso de ser rechazada, aparece un botón dónde dice "Volver a intentar", que refresca la página y puedes volver a realizar la validación. 
# Lab Notes (Laboratoria)

- Este proyecto se realizó siguiendo estas consideraciones [El Proyecto](https://github.com/Laboratoria/LIM015-lab-notes) , lo desarrollé dentro del último mes en [Laboratoria - Sede Lima](https://www.laboratoria.la/)

- **Periodo :** 27 Octubre - 03 Noviembre, 2021
> En este proyecto se usó Angular, Bootstrap, Firebase

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del Proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de Aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios que cumple el proyecto](#4-criterios-que-cumple-el-proyecto)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)

***

## 1. Preámbulo

Hoy en día no es práctico imaginar el desarrollo web sin HTML, CSS y  JavaScript, esta última es el alma del desarrollo de aplicaciones web.
[React](https://reactjs.org/) y [Vue](https://vuejs.org/) son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una serie de convenciones e implementaciones _probadas_ y _documentadas_ para resolver un problema común a toda interfaz web. Esto nos permite concentrarnos mejor (dedicar más tiempo) en las características _específicas_ de nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cual es un gran valor per se), si no que adoptamos una **arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas **abstracciones**, un **vocabulario**, una **comunidad**, etc.

## 2. Resumen del Proyecto

No existe día que no tomemos notas, siempre necesitamos apuntar alguna
dirección, número telefónico, notas de alguna reunión o guardar nuestras URLs favoritas para poder consultarlas más tarde. Muchas veces para esta actividad utilizamos libretas o agendas que terminan siendo olvidadas, o anotamos de manera dispersa de tal manera que perdemos de vista la prioridad y el propósito de la nota lo cual da como resultado una nota perdida.

Hoy en día las personas contamos con algún dispositivo móvil o
laptop y además nos estamos preocupando por implementar acciones para
salvar el medio ambiente, además el uso de notas en el trabajo remoto se vuelve indispensable para aquello que debemos apuntar en el día con día, por ello a una Laboratorian se le ocurre la idea de tener una herramienta como una web app para tomar notas, que nos permita crear, editar, eliminar y consultar las notas en cualquier momento.

![Shows CRUD functionalities](https://raw.githubusercontent.com/florenciasilva/lab-notes/master/demo-crud.gif?token=AGJBHNTVAQRWOVF2IGMP6FK5NVFAS)


## 3. Objetivos de Aprendizaje

El objetivo principal fue aprender a construir una _interfaz web_ usando
el _framework_ o la _libreria_ elegida. Todos estos frameworks de Frontend atacan el mismo problema: **cómo mantener la interfaz y el estado sincronizados**. 


### HTML y CSS

* [x] HTML semántico
* [x] CSS flexbox
* [x] Maquetación

### Frontend Development

* [x] Componentes
* [x] Manejo de estado

### Angular

- [x] Components & templates
- [x] Directivas estructurales (ngIf / ngFor)
- [ ] @Input | @Ouput
- [x] Creación y uso de servicios
- [x] Manejo de rutas
- [x] Creación y uso Observables.
- [ ] Uso de HttpClient
- [ ] Estilos de componentes (ngStyle / ngClass)

### Firebase

* [x] Firestore
* [x] Firebase Auth
* [ ] Firebase security rules
* [x] onSnapshot
* [x] onAuthStateChanged

### Testing

* [ ] Testeo de tus interfaces
* [x] Testeo de componentes
* [ ] Testeo asíncrono
* [ ] Mocking

### Buenas prácticas de desarrollo

* [ ] Modularización
* [ ] Nomenclatura / Semántica
* [ ] Linting

## 4. Criterios que cumple el proyecto

* [x] Autenticación con correo y/o Google y/o Facebook.
* [x] Cerrar sesión
* [x] Crear una nueva nota
* [x] Ver todas mis notas
* [x] Editar mis notas
* [x] Borrar mis notas
* [x] Agregar el contenido de mi nota
* [ ] Anotar un título a mi nota
* [ ] Ver la última modificación de la nota
* [ ] Se ve y funciona bien en una _Tablet_
* [ ] Debes haber recibido _code review_ de al menos una compañera.
* [ ] Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* [ ] Desplegaste tu aplicación y has etiquetado tu versión `git tag`
* [ ] Si la usuaria empieza a escribir una nota y por alguna razón la pestaña del navegador se cierra, cuando la vuelva a abrir, la nota debería mostrarse como estaba
* [ ] Subir imágenes
* [ ] Ver el número de veces que he editado mi nota
* [ ] Consumo de API/s (Google Maps, Spotify, Pinterest, etc.)
* [ ] Progressive Web App (PWA)
* [ ] Puedes crear categorías y clasificar por tipo de nota
* [ ] Guardar el color de la nota
* [ ] Crear una nota como publica

### 4.1 Definición del producto

#### ¿Quiénes son los principales usuarios del producto?
Toda persona que necesite tomar notas para luego poder revisarlas cuándo lo requiera.

#### ¿Qué problema resuelve el producto / para qué le servirá a estos usuarios?
Hoy en día requerimos tomar notas para cualquier cosa, desde esta app podrás hacerlo en cualquier momento, desde tu celular, equipo, etc.

### 4.2 Historias de usuario

La [_Product Owner_](https://youtu.be/r2hU7MVIzxs) nos presenta este _backlog_ que es el resultado de su trabajo colaborativo.

  
~~~
**[Historia de usuario 1]** Usuaria/o debería poder iniciar sesión

Yo como usuaria quiero ingresar a lab-notes con mi cuenta de correo.   
~~~
~~~
**[Historia de usuario 2]** Usuaria/o debería poder tomar nota

Yo como usuaria de lab-notes quiero tomar nota para no depender de mi mala
memoria y tener presente en todo momento los apuntes ó cosas importantes que antes escribía en papel.   
~~~
~~~
**[Historia de usuario 3]** Usuaria/o debería poder ver las notas

Yo como usuaria de lab-notes quiero leer mis notas para recordar lo que escribí antes.  
~~~
~~~
**[Historia de usuario 4]** Usuaria/o debería poder editar las notas

Yo como usuaria de lab-notes quiero editar notas para poder modificar lo que escribí antes.  
~~~
~~~
**[Historia de usuario 5]** Usuaria/o debería poder borrar notas

Yo como usuaria de lab-notes quiero borrar una nota para no volver a verla.  
~~~  

### 4.3 Diseño de la Interfaz de Usuario (Prototipo de Alta fidelidad)

![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/PA-login.png)
>Prototipo de pantalla de LOGIN


![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/PA-register.png)
>Prototipo de pantalla de REGISTRAR


![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/PA-home.png)
>Prototipo de pantalla de HOME


### 4.4 Implementación de la Interfaz de Usuario (Angular)

A continuacion se muestra el funcionamiento de la pagina:

Ingreso a la web: El usuario puede ingresar con una cuenta de correo, previamente creada. Dando click en **Iniciar Sesión**

![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/pantalla1.png)
>Pantalla de LOGIN

Al dar click en Crear cuenta, te redirige a una ventana con datos que debes llenar correctamente y dar click en **Registrarme**
![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/pantalla2.png)
>Pantalla de REGISTRAR

Ingreso a la web: El usuario puede ingresar con Google al darle click en **Acceder con Google**
![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/pantalla3.png)
>Pantalla de LOGIN

El usuario cuando le da click en **Add Note**
![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/pantalla4.png)
>Pantalla de HOME

Se le crea una nota, si el desea modificar o escribir datos solo basta con dar click en la seción del mensaje
![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/pantalla5.png)
>Prototipo de pantalla de HOME

Cuando ya escribió la nota que desea le da click en **Update**, esto muestra un mensaje "Nota actualizada"
![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/pantalla6.png)
>Prototipo de pantalla de HOME

Al agregar una nueva nota esta se situa antes de la nota anterior.
![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/pantalla7.png)
>Prototipo de pantalla de HOME

Si le da click en **X** esta elimina la nota clickeada
![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/pantalla8.png)
>Prototipo de pantalla de HOME

Si el usuario desea cerrar sesión, solo debe dar click debajo de su foto en **Log out**
![](https://raw.githubusercontent.com/sgcm14/LIM015-lab-notes/main/src/assets/images/pantalla9.png)
>Prototipo de pantalla de HOME

## 5. Consideraciones técnicas

* La aplicación es una _Single Page App_. Las notas pueden ser realizadas desde una _tablet_.

* Se implementó pruebas unitarias de los componentes.

Para este proyecto se creó una Web App con `Angular` y `Firebase`.

Para este proyecto se manejó _vistas_. Esto significa que cada sección tiene su propia URL, la cual indica que _vista_ o _componente_ será mostrado en pantalla. 

* `README.md` es donde se encuentra la descripción del proyecto y elementos relevantes del proyecto.  
* `.editorconfig` este archivo contiene la configuración para editores de texto.
* `.gitignore`  este archivo contiene reglas para ignorar `node_modules` u otras carpetas que no deban incluirse en control de versiones (`git`).



**Realizado por :** 

Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">

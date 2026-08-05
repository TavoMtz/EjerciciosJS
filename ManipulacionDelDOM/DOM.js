//* Introduccion al DOM
// console.log('---------------------Elementos del documento----------------------');
// console.log(window.document);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.links);
// console.log(document.images)
// console.log(document.scripts)
// setTimeout(() => {
// console.log(document.getSelection().toString());
// }, 3000)
//* DOM: Nodos, Elementos y Selectores
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"))
//TODO Estos 3 ultimos son mas modernos
// console.log(document.getElementById("menu"));
// console.log(document.querySelector("#menu"));
// document.querySelectorAll("a").forEach((el) => console.log(el));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll("#menu li"));
//* Atributos y data attributtes
//TODO Un data-attributte es un atributo perzonalizado que permite guardar informacion dentro un elemento HTML, un atributo es son las especificaciones de HTML para configurar el comportamiento de un elemento
//? Existe el set, get, remove, has
// console.log(document.documentElement.getAttribute("lang"));
// document.documentElement.setAttribute("lan", "eng") //? Esto es un data-attributte un lan que no existia lo cree y le di un valor
// console.log(document.documentElement.getAttribute("lan"));
// document.documentElement.removeAttribute("lan")
// console.log(document.documentElement.hasAttribute("lan"));
// console.log(document.querySelector(".link-DOM").getAttribute("href"));
// //TODO Antes de guardar un atributo del DOM en una variable se pone "$" para identificarlo 
// const $linkDOM = document.querySelector(".link-DOM")
// $linkDOM.setAttribute("target", "_blank")
// $linkDOM.setAttribute("rel", "noopener")
// $linkDOM.setAttribute("href", "https://youtube.com")
// console.log($linkDOM.hasAttribute("target"))
// $linkDOM.removeAttribute("target")
// console.log($linkDOM.hasAttribute("target"))
// $linkDOM.setAttribute("target", "_blank")
// //? Data-attributte
// //TODO Los data-attributtes deben empezar con "data-" siempre 
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description", "Modelo de objeto de documento")
// console.log($linkDOM.getAttribute("data-description"));
//* Texto y HTML
// const $whatIsDOM = document.querySelector("#queEs")

// let text = `
// <p>
//   El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
// </p> 
// <p>
//   Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
// </p>
// <p>
//   <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
// </p>`

// $whatIsDOM.textContent = text //? Solo pega el nuevo elemento como texto 
// $whatIsDOM.innerHTML = text //? Guarda dentro del elemento HTML existente el nuevo elemento dado
// $whatIsDOM.outerHTML = text //? Reeplaza el elemento existente por el nuevo insertado

// //* DOM Traversing: Recorriendo el DOM
// const $cards = document.querySelector(".cards")
// console.log($cards);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.children[3].closest("section"));

// //* DOM: Creando Elementos y Fragmento
// const $figure = document.createElement("card"),
//       $img = document.createElement("img"),
//       $figcamption = document.createElement("figcaption"),
//       $figcamptionText = document.createTextNode("Animals"),
//       $cards = document.querySelector(".cards")

//       $img.setAttribute("src", "https://placeimg.dev/200/200/animals")
//       $img.setAttribute("alt", "Animals")
//       $figure.classList.add("card")

//       $figcamption.appendChild($figcamptionText)
//       $figure.appendChild($img)
//       $figure.appendChild($figcamption)
//       $cards.appendChild($figure)

// //TODO Insertar Muchos elementos al mismo tiempo (DB, API)
// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]
// const $ul = document.createElement("ul")

// document.write("<h3> Estaciones del año </h3>")
// document.body.appendChild($ul)

// estaciones.forEach((el) => {
//   const $li = document.createElement("li")
//   $li.textContent = el
//   $ul.appendChild($li)
// })

// document.write("<h3>Continentes</h3>")
// const continentes = ["America", "Europa", "Asia", "Africa", "Oceania"]
// const $ul2 = document.createElement("ul")
// document.body.appendChild($ul2)

// continentes.forEach((con) => {
//   const $li2 = document.createElement("li")
//   $li2.textContent = con
//   $ul2.appendChild($li2)
// })

// //TODO Los FRAGMENTOS sirven para cuandos se quieren insertar muchos elementos en el DOM, ayuda a que no se alente la aplicacion ya que es una sola insercion dinamica que contiene toda la informacion recuperada del endpoint, ya sea una base de datos una API, etc. 
// const meses = [
//   "Enero", 
//   "Febrero", 
//   "Marzo", 
//   "Abril", 
//   "Mayo", 
//   "Junio",
//   "Julio", 
//   "Agosto",
//   "Septiembre",
//   "Octubre", 
//   "Noviembre", 
//   "Diciembre"
// ]
// document.write("<h3>Meses del año</h3>")
// const $ul3 = document.createElement("ul")
// const $fragment = document.createDocumentFragment()

// meses.forEach((mes) => {
//   $li3 = document.createElement("li")
//   $li3.textContent = mes
//   $fragment.appendChild($li3)
// })
// $ul3.appendChild($fragment)
// document.body.appendChild($ul3)

//* DOM: Templates HTML
// const $cards = document.querySelector(".cards"),
//       $template = document.getElementById("template-card").content,
//       $fragment = document.createDocumentFragment(),
//       cardContent = [
//         {
//           title: "Tecnología",
//           img: "https://placeimg.dev/200/200/tech", //Si no funciona cambiar por .dev
//         },
//         {
//           title: "Animales",
//           img: "https://placeimg.dev/200/200/animals",
//         },
//         {
//           title: "Arquitectura",
//           img: "https://placeimg.dev/200/200/arch",
//         },
//         {
//           title: "Gente",
//           img: "https://placeimg.dev/200/200/people",
//         },
//         {
//           title: "Naturaleza",
//           img: "https://placeimg.dev/200/200/nature",
//         },
//       ]

// cardContent.forEach((c) => {
//   $template.querySelector("img").setAttribute("src", c.img)
//   $template.querySelector("img").setAttribute("alt", c.title)
//   $template.querySelector("figcaption").textContent = c.title

//   const $clone = document.importNode($template, true) 
//   $fragment.appendChild($clone)
// })
// $cards.appendChild($fragment)

//*DOM: Modificando Elementos
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true)

    $newCard.innerHTML = `
    <img src="https://placeimg.dev/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
    `
    $newCard.classList.add("card")
     
    //$cards.replaceChild($newCard, $cards.children[2])
    //$cards.insertBefore($newCard, $cards.firstElementChild  )
    //$cards.removeChild($cards.children[4])
    document.body.appendChild($cloneCards)















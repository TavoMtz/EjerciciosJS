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

//*DOM: Modificando Elementos (old ways)
//const $cards = document.querySelector(".cards"),
//     $newCard = document.createElement("figure"),
//     $cloneCards = $cards.cloneNode(true)

//     $newCard.innerHTML = `
//     <img src="https://placeimg.dev/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
//     `
//     $newCard.classList.add("card")
     
    //$cards.replaceChild($newCard, $cards.children[2])
    //$cards.insertBefore($newCard, $cards.firstElementChild  )
    //$cards.removeChild($cards.children[4])
//     document.body.appendChild($cloneCards)

//* DOM: Modificando Elementos (Cool Style)
// const $cards = document.querySelector(".cards"),
//       $newCard = document.createElement("figure")

// $newCard.innerHTML = `
// <img src="https://placeimg.dev/200/200/any" alt="Any">
// <figcaption>Any</figcaption>
// `
// $newCard.classList.add("card")
//$cards.insertAdjacentElement("afterbegin",$newCard)
//$cards.insertAdjacentElement("afterend",$newCard)
//$cards.insertAdjacentElement("beforebegin",$newCard)
//$cards.insertAdjacentElement("beforeend",$newCard)

//* DOM: Manejadores de Eventos
// function holaMundo(){
//     alert('Hola Mundo!')
//     console.log(Event);
// }

// const $eventoSemantico = document.querySelector("#eventoSemantico")

// $eventoSemantico.onclick = holaMundo
// $eventoSemantico.onclick = function(e){
//     alert("Evento semantico");
//     console.log(e);
//     console.log(event);
//     console.log(Event);
// }
// //? Evento Multiple
// const $eventoMultiple = document.getElementById("eventoMultiple")
// $eventoMultiple.addEventListener("click",holaMundo)
// $eventoMultiple.addEventListener("click",(e)=>{
//     alert("manejador de eventos multiples")
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// })

//*DOM: Eventos con Parámetros y Remover Eventos 
// function holaMundo(){
//     alert('hola desde -> Hola Mundo!')
//     console.log(Event);
// }

// function saludar(nombre = "Desconocido"){
//     alert(`Hola ${nombre} desde --> saludar`)
// }

// //? Evento Multiple
// const $eventoMultiple = document.getElementById("eventoMultiple")
// $eventoMultiple.addEventListener("click",holaMundo)
// $eventoMultiple.addEventListener("click",(e)=>{
//     alert("hola desde -> manejador de eventos multiples")
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// })

// $eventoMultiple.addEventListener("click",() => {
//     saludar("Tavo")
// })
// //TODO Esto es inutil si quieres quitar un evento commenta la funcion
// const $btnRemover = document.getElementById("btnRemover")

// const removerDblClick = (e) =>{
//     alert('Removiendo esta evento del boton')
//     console.log(e);
//     $btnRemover.removeEventListener("dblclick",removerDblClick)
// }

// $btnRemover.addEventListener("dblclick", removerDblClick)

//* DOM: Flujo de Eventos (Burbuja y Captura)
// const $divEventos = document.querySelectorAll(".eventosFlujo div")
// console.log($divEventos);

// function flujoEventos(e){
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
// }

//$divEventos.forEach((d) => {
    //Fase burbuja
    //d.addEventListener("click",flujoEventos)
    //Fase captura
    //d.addEventListener("click",flujoEventos,true)
    // d.addEventListener("click",flujoEventos,{
    //     capture:true,
    //     once:true
    // })
//})

//* DOM: stopPropagation & preventDefault 
// const $divEventos = document.querySelectorAll(".eventosFlujo div")
// console.log($divEventos);

// function flujoEventos(e){
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
//     e.stopPropagation()
// }

// $divEventos.forEach((d) => {
//     d.addEventListener("click",flujoEventos)
// })
// const $enlace = document.querySelector(".enlace")
// console.log($enlace)
// $enlace.addEventListener("click", (e) => {
//     alert("Hola soy Tavo bienvenido a mi web")
//     e.preventDefault()
//     e.stopPropagation()
//  })

//* DOM: Delegación de Eventos, es la MEJOR manera de agregar eventos a MUCHOS elementos de manera dinamica
function flujoEventos(e){
    console.log(`Hola te saluda ${e.target.className}, el click lo origino ${e.target.className}`);
}
function infoFoto(e){
    console.log(`Hola diste click en la imagen de ${e.target.alt}`)
}

document.addEventListener("click", (e) => {
    console.log("click en", e.target);

    if(e.target.matches(".eventosFlujo div")){
        flujoEventos(e)
    }

    if(e.target.matches(".enlace")){
        alert("Hola soy tavo bienvenidos a mi web")
        e.preventDefault()
    }

    if(e.target.matches(".cards img")){
        infoFoto(e)
    }
})

//* BOM: Propiedades y Eventos

//* BOM: Métodos (.open, .close, .print)
const $btnOpen = document.querySelector("#btnOpen")
const $btnClose = document.querySelector("#btnClose")
const $btnPrint = document.querySelector("#btnPrint")
let newW 

$btnOpen.addEventListener("click", (e) => {
    newW = window.open("https://gm-softwareservices.vercel.app/")
})

$btnClose.addEventListener("click", () => {
    newW.close()
})

$btnPrint.addEventListener("click", () => {
    window.print()
})

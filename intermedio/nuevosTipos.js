//*Symbols
// //? Un symbol es como una PK pero privada si imprimes las propiedades del objeto no aparecera, se decclaran en mayuscula
//  const NOMBRE = Symbol('name')
//  const SALUDAR = Symbol('funcionSaludo')

//  let persona = {
//     [NOMBRE]: 'Gustavo',
//     Apellido: 'Martinez',
//     [SALUDAR]: () => {
//         console.log('Hola mundo!')
//     },
//     edad: 35
//  }

//  console.log(persona);
//  console.log(persona[NOMBRE]);
//  console.log(persona.Apellido);
//  persona[SALUDAR]()
 
//  for (let propiedades in persona){
//     console.log(propiedades); //atributo del objeto
//     console.log(persona[propiedades]); //Valor del atributo
//  }
//  console.log(Object.getOwnPropertySymbols(persona)); //Ver los simbolos
 
 //? SE USA PARA CREAR VARIABLES UNICAS COMO SI FUERAN UN PK EN DB

 //*Sets es como arreglo pero con datos unicos.
//  let set = new Set([1,2,3,4,true,false,1,2,"hola", "hola", "Hola"])
//  console.log(set)
//  set.add("Adios")
//  console.log(set);
// //?Pasar un array a set para eliminar duplicados 
// let arr = [1,2,2,3,3,4,4,5,5,true,true,false,false,'hola','adios']
// console.log('Esto es el arreglo')
// console.log(arr);
// let set2 = new Set(arr)
// console.log('Esto es el set')
// console.log(set2);
// console.log(set2.size);
// set2.add('HOLA')
// console.log(set2);
// set2.delete(1)
// console.log(set2);
// set2.clear()
// console.log(set2);
//*MAPS
//? Es una coleccion de datos
// let mapa = new Map()
// mapa.set('nombre', 'gustavo')
// mapa.set('Apellido', 'Martinez')
// mapa.set('Edad', 23)
// console.log(mapa.size);
// console.log(mapa.get('nombre'));
// console.log(mapa.get('Edad'));
// console.log(mapa.has('Apellido'));

// for(let [key, value] of mapa){
//     console.log(key)
//     console.log(value)
// }
//*Weak seats y weak Maps
//?No son iterables, no podemos ver su tamaño (size), solo aceptan objetos como inputs
//TODO WeakSet
// let ws = new WeakSet()
// let valor1 = {'valor1': 1}
// let valor2 = {'valor1': 2}
// let valor3 = {'valor1': 3}

// ws.add(valor1)
// ws.add(valor2)
// ws.add(valor3)
// console.log(ws)
// console.log(ws.has(valor1))
// ws.delete(valor3)
// console.log(ws)
// ws.add(valor3)
// console.log(ws)
// setInterval(() => {console.log(ws)},1000)

// setTimeout(() => {
//     valor1 = null
//     valor2 = null
//     valor3 = null
// },5000)

//TODO WeakMaps
// let wm = new WeakMap()
// let valor1 = {}
// let valor2 = {}
// let valor3 = {}

// wm.set(valor1, 1)
// wm.set(valor2, 2)
// wm.set(valor3, 3)

// console.log(wm.has(valor1))
// wm.delete(valor3)
// console.log(wm);
// wm.set(valor3, 3)
// console.log(wm);

// setInterval(() => {console.log(wm)}, 1000)

// setTimeout(() => {
//     valor1 = null
//     valor2 = null
//     valor3 = null
// }, 3000)
//* Iterables e Iteradores 
// const iterable = [1,2,3,4,5]
// const iterador = iterable[Symbol.iterator]()

// console.log(iterable);
// console.log(iterador);
// //console.log(iterador.next());

// let next = iterador.next()

//  while(!next.done){
//     console.log(next.value);
//     next = iterador.next()
//  } 

 //*Generators
 //? Ayudan a generar iteradores pero para codigo asincrono, usan YIELD como plabra clave
 
//  function* iterable(){
//       yield "Hola 1"
//       console.log("log 1");
//       yield "Hola 2"
//       console.log("log 2");
//       yield "Hola 3"
//       yield "Hola 4"
//  }

//  let gen = iterable()
//  //console.log(gen.next());
// for(let y of gen){
//    console.log(y);
// }

// const arr = [...iterable()]
// console.log(arr);

// function cuadrado(valor){
//  setTimeout(()=>{
//    console.log({valor, resutaldo: valor*valor});
//  },Math.random()*1000)
// }

// function* generador(){
//    console.log("Inicia generador");
//    yield cuadrado(0)
//    yield cuadrado(1)
//    yield cuadrado(2)
//    yield cuadrado(3)
//    yield cuadrado(4)
//    yield cuadrado(5)
//    console.log("Termina Generador");
// }
// let yen = generador()
// for(let yi of yen){
//    console.log(yi);
// }

//*PROXIES
//TODO Son como una clase creas un Proxy basado en un objeto, Proxy(instancia) Objeto(Clase)

// const persona = {
//    nombre: '',
//    apellido: '',
//    edad: null
// }

// const manejador = {
//    set(obj, propiedades, valor){
//       if(Object.keys(obj).indexOf(propiedades) === -1){
//          return console.error(`La propiedad "${propiedades}" no existe en persona`);
//       }
//       if(
//          (propiedades == "nombre" || propiedades == "apellido") && 
//          !(/^[A-Za-zÑñÁáÉéÍíÓóÚú/s]+$/g.test(valor))
//       ){
//          return console.error(`Se debe de seguir el patron del nombre completo`);
//          }
//       obj[propiedades] = valor
//    }
// }

// const jon = new Proxy(persona, manejador)
// jon.nombre = 'Jon'
// jon.apellido = 'Mircha'
// jon.edad = 35
// jon.twitter = '@jon123'
// console.log(jon);
// console.log(persona);
//* Nuevas Propiedades dinamicas de los objetos
let Calificacion = Math.floor(Math.random() * 10)
let objUsuarios = {
   [`Calificacion - ${Calificacion}`]: 'Juan'
}

let usuarios = ['Juan', 'Roy', 'Mike', 'Lucio', 'Kike', 'Tavo']
console.log(objUsuarios);

usuarios.forEach((usuario, index) => {
   objUsuarios[`id - ${index}`] = usuario
});
console.log(objUsuarios);
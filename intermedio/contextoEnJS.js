//* El objeto THIS se refiere al contexto del objeto, 
//* por ejemplo en un objeto tomara el contexto del objeto, 
//* una funcion toma el contexto de donde fue creada
//* si se crea en el contexto global se hara referencia al objeto Window
//* la unica funcion que no crea su propio contexto es la arrow function

//---------------------------------------------------------------------------------------//
//* CALL, APLY, BIND
//TODO CALL & APPLY: Funciona para conservar el contexto de un objeto en especifico
console.log(this)
console.log(this === window);
this.contexto = 'Contexto global'

function saludar(saludo, aQuien){
    let nombre = 'Gustavo'
    console.log(`${saludo} ${aQuien} desde el ${this.contexto}`);
}
saludar('Hola', 'Gustavo')

const obj = {
    contexto: 'Contexto del objeto 1',
}
saludar.call(obj, 'Hola', 'Gustavo Martinez')
saludar.apply(obj, ['adios', 'Gustavo Martinez'])
//TODO BIND: Hace un enlace entre 2 contextos
this.nombre = window

let persona = {
    nombre: 'Gustavo Enrique',
    saludar: function(saludo){
        console.log(`${saludo} ${this.nombre}`);
    }
}
persona.saludar('Hola')

let otraPersona = {
    saludar: persona.saludar.bind(persona)
}
otraPersona.saludar('Adios')
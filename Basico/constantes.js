export const PI = Math.PI

export let usuario = 'Jon'
let password = "hola"
//? Para exportar por default las variables de hace despues de su declaracion 
//export default password 

export function saludar(){
    console.log("hola modulos ES6");
}

//TODO Solo se puede tener un default
//?Cuando se expprta por defecto al importar se hace fuera de {}
// export default function saludar2(){
//     console.log("hola modulos ES6");
// }

export default class saludarB{
    constructor(){
        console.log("Hola");
    }
}
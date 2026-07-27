//*Modulos
//En el HTML poner type module si no no podra usar import
import saludarB, {saludar, PI, usuario} from "./constantes.js"
import {artimetica as ar} from "./artimetica.js"

console.log("Modulos.js");
console.log(PI);
console.log(ar.sumar, ar.restar);
console.log(ar.sumar(3,4));
console.log(ar.restar(20,19));
saludar()
let saludo = new saludarB()
saludo


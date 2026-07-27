// numeros = [1,2,3,4,5,6,7,8,9,10]

// for(let i=0; i < numeros.length; i++){
//  if(numeros[i]%3 === 0){
//     console.log(`Numeros multiplos de 3: ${numeros[i]}`);
//  }
// }

//* Desestrucutracion
// let Usuario = {
//     nombre: "Gustavo",
//     apellido: "Martinez",
//     edad: 22,
//     correo: "gustavo@gmail.com"
// }

// let {nombre, apellido, edad, correo} = Usuario

// console.log(nombre, apellido);

//* Objetos Literales
// let nombre = "simba"
// let edad = 1
// let raza = "pastor aleman"

// let perro = {
// nombre,
// edad,
// raza,
// dueño: "Gustavo Martinez",
// ladrar() {
//     console.log("Guau Guau Guauuuuuuuuu!");
//     }
// }
// console.log(perro)
// perro.ladrar()

//* PARAMETROS REST & OPERADOR SPREAD 
//? Parametros rest: Forma de virtualmente agregar parametros ilimitados a una funcion
// function sumar(a,b, ...c) {
//     let resultado = a + b

//     c.forEach(function (n) {
//         resultado += n
//     })

//     return resultado
// }
// console.log(sumar(1,2));
// console.log(sumar(1,2,3,4,5,6,7,8,9));

//?Spread Operator: Permite almacenar multiples elementos/argumentos
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,0]

// console.log(arr1, arr2);

// let arr3 = [...arr1, ...arr2]
// console.log(arr3);

//* ARROW FUNCTIONS
saludar = (nombre) => console.log(`Hola ${nombre}`)
saludar('Gustavo')

const sumar = (a,b) => a + b
console.log(sumar(9,9));

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
funcionDeVariasLineas()

const numeros = [1,2,3,4,5]

numeros.forEach((n,index)=>{
    console.log(`El elemento ${n} esta eb la posicion ${index}`)
})

const Pez = {
    nombre: "Cat",
    nadar(){
        console.log(this)
    }
}
Pez.nadar()
//* Programacion Orientada a Objetos (POO)
//?Clases - Modelo a seguir
//?Objetos - Instancias de una Clase
//?Atributo - Caracteristica o propiedad del Objeto (Variables dentro el objeto)
//?Metodos - Acciones que un objeto puede realizar (Funciones)

// const animal = {
//     nombre: "Rey",
//     sonar(){
//         console.log("Rugido!!!");
//     }
// }

// const animal2 = {
//     nombre: "Sub",
//     sonar(){
//         console.log("Ladra!!");
//     }
// }
// console.log(animal)
// console.log(animal2)

//* PROTOTIPOS
//? Funcion constructora, funciona para crear varios objetos
// function Animal(nombre, genero){
//     Atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     Metodos
//     this.sonar = function(){
//         console.log("*Se mueve*")
//     }
// }

//? Funcion constructora donde se asignan los metodos al Prototipo no a la funcion como tal
//TODO Ayuda a evitar duplicados en las instancias mejora rendimiento
// function Animal(nombre, genero){
//     Atributos
//     this.nombre = nombre;
//     this.genero = genero;
// }
//  Metodos agregados al proptotipo de la funcion constructora
//     Animal.prototype.sonar = function(){
//         console.log("*Se mueve*")
//     }

// let snoopy = new Animal("Snoopy", "Macho"),
// lolaBunny = new Animal("LolaBunny", "Hembra")

// console.log(snoopy);
// console.log(lolaBunny);

//*HERENCIA PROTOTIPICA
// function Animal(nombre, genero){
     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;
// }
  //Metodos agregados al proptotipo de la funcion constructora
//     Animal.prototype.sonar = function(){
//         console.log("*Se mueve*")
//     }

// function Perro(nombre, genero, tamanio){
//     this.super = Animal
//     this.super("nombre", "genero")
//     this.tamanio = tamanio
// }
// //?Perro hereda de animal
// Perro.prototype = new Animal()
// Perro.prototype.constructor = Perro

 //Sobreescritura de metodos de padre en hijo
// Perro.prototype.sonar = function (){
//     console.log("Guauuuuu Guauuu!!!");
// }

// Perro.prototype.olfatear = function (){
//     console.log("Huele");   
// }

// let snoopy = new Perro("Snoopy", "Macho", "Mediano"),
// lolaBunny = new Animal("LolaBunny", "Hembra")
// console.log(snoopy);
// console.log(lolaBunny);
// snoopy.olfatear()
// snoopy.sonar()
//* Clases y Herencia 
// class Animal{
//     constructor(nombre, genero){
//         this.nombre = nombre
//         this.genero = genero
//     }
//     //Metodo
//     sonar(){
//     console.log("Hago ruido porque estoy vivo");
//     }
//     saludar(){
//         console.log(`Hola mi nombre es ${this.nombre} y soy ${this.genero}`);
//     }
// }


// class Perro extends Animal{
//     constructor(nombre,genero,tamanio){
//         super(nombre,genero)
//         this.tamanio = tamanio
//         this.raza = null
//     }

//     sonar(){
//         console.log("Hago ruido de perro");
//     }
//     ladrar(){
//         console.log("Guau Guau");
//     }
//     //Metodo estatico
//     static queEres(){
//         console.log("Los perros somos animales mamiferos que caminamos en 4 patas y somos considerados los mejores amigos del hombre");
//     }
//     //Setter & Getter 
//     get getRaza(){
//         return this.raza
//     }

//     set setRaza(raza){
//         this.raza = raza
//     }
// }
// const mimi = new Animal("Mimi", "Hembra")
// const kan = new Perro("kan", "macho")
// console.log(mimi, kan);
// kan.sonar()
// mimi.sonar()
// kan.ladrar()
// kan.saludar()
// //* Métodos estáticos, getters y setters
// //?Metodo que no necesita instanciacion
// Perro.queEres()
// //TODO Setter y Getter se tratan como atributos no como metodos 
// console.log(kan.getRaza);
// kan.setRaza = "Gran Danes"
// console.log(kan.getRaza)
//*Alert, Confirm Y Prompt
//? ESTA EN EL ARCHIVO HTML




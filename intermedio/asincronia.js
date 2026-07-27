//*Temporizadores
// console.log("Inicio")
// setTimeout(()=>{
//     console.log("Ejecutando un setTimeout, se ejecuta solo una vez");
// },1000)

// // setInterval(() => {
// //     console.log("Se ejecuta un setInterval, se ejecuta cierto intervalo de tiempo");
// // },3000)

// let temporizador = setInterval(() => {
//     console.log(new Date().toLocaleTimeString());
// },1000)

// setTimeout(() => {
//     clearInterval(temporizador)
//     console.log('Limpiando temporizador');
// },2500)
//*Asincrionia y Event Loops
//?JS es single thread, solo se ejecuta una accion a la vez
//?Operaciones CPU y Operaciones I / O
//?Operaciones concurrentes y Paralelas
//?Operaciones Bloqueantes
//?Operaciones sincronas y Asincronas

//?Codigo Sincrono bloqueante
// (()=>{
//  console.log("Codigo sincrono ");
//  console.log("Inicio");

//  function dos(){
//     console.log('Dos');
//  }

//  function uno(){
//     console.log('uno');
//     dos()
//     console.log('Tres');
//  }

//  uno()
//  console.log('Fin'); 
// })();
//*Código Asíncrono No Bloqueante
// (() => {
//   console.log("Código Asíncrono");
//   console.log("Inicio");

//   function dos() {
//     setTimeout(function () {
//       console.log("Dos");
//     }, 1000);
//   }

//   function uno() {
//     setTimeout(function () {
//       console.log("Uno");
//     }, 0);
//     dos();
//     console.log("Tres");
//   }

//   uno();
//   console.log("Fin");
// })();
//* Callback
// function cuadradoCallback(value,callback){
//    setTimeout(() => {
//       callback(value, value*value)
//    },0| Math.random() * 100)
// }

// cuadradoCallback(5, (value,result) => {
//    console.log('Inicial callback');
//    console.log(`Callback: ${value}, ${result}`)
// })
//* Promises
// function cuadradoPromise(value){
//    //Validaciones
//    if(typeof value !== 'number'){
//       return Promise.reject(`Error ${value} no es un numero`)
//    }
//    //Retorno
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve({
//             value: value,
//             result: value * value
//          })
//       },0| Math.random() * 1000)
//    })
// }

// cuadradoPromise(0)
// .then((obj) => {
//    console.log('Inicio Promesa');
//    console.log(`${obj.value} y ${obj.result}`)
//    return cuadradoPromise(1)
// }).then((obj) => {
//    console.log(`Promise: ${obj.value} y ${obj.result}`);
//    return cuadradoPromise(2)
// }).then((obj) => {
//    console.log(`Promise: ${obj.value} y ${obj.result}`);
//    return cuadradoPromise(3)
// }).then((obj) => {
//    console.log(`Promise: ${obj.value} y ${obj.result}`);
//    return cuadradoPromise(4)
// }).then((obj) => {
//    console.log(`Promise: ${obj.value} y ${obj.result}`);
//    return cuadradoPromise(5)
// }).then((obj) => {
//    console.log(`Promise: ${obj.value} y ${obj.result}`);
//    return 'Fin promesa'
// })
// .catch(err => console.error(err))

//*ASYNC & AWAIT
function cuadradoPromise(value){ //--> Promesa, trabajan bien con las funciones asincronas
   //Validaciones
   if(typeof value !== 'number'){
      return Promise.reject(`Error ${value} no es un numero`)
   }
   //Retorno
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve({
            value: value,
            result: value * value
         })
      },0| Math.random() * 1000)
   })
}

async function funcionAsincronaDeclarada (){
   try {
      console.log('Inicia Funcion asincrona declarada');
      let obj = await cuadradoPromise(0)
      console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`);
      //Nos evita tantos then
      obj = await cuadradoPromise(1)
      console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(2)
      console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(3)
      console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise(4)
      console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(5)
      console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`);

      console.log(`Funcion asincrona declarada finalizada`);
   } catch (error) {
      console.error(error)
   }
}
funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
   try {
      let obj = await cuadradoPromise(6)
      console.log(`Funcion asincrona esxpresada tiene un valor de ${obj.value} y un resultado de ${obj.result}`);
   } catch (error) {
      console.error(error)
   }
}
funcionAsincronaExpresada()


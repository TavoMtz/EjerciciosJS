//* Ejercicio 1: Funcion que cuente el nuemero de caracteres de una cadena de texto
let contarCaracteres = (c) =>{
    if(typeof c === 'string'){
        return c.length
    }else{
       let conver = JSON.stringify(c)
        return conver.length
    }
}

console.log(contarCaracteres("Gustavo"));
console.log(contarCaracteres({
    name: "Gustavo",
    lastname: "Martinez",
    color: "Green"
}));
//* Ejercicio 2: Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
//? SE USA .slice(inicio, fin) para dividir una cadena de texto 
let recortado = (entry,recorte) => {
    if(typeof entry === 'string'){
        let newCadena = entry.slice(0,recorte)
        return newCadena
    }else{
        let conversion = JSON.stringify(entry)
        let recorte2 = conversion.slice(0,recorte)
        return recorte2
    }
}
console.log(recortado("Hola mundo",6));
console.log(recortado({
    serie: "The boys",
    Paltaforma: "Prime Video",
    Temporadas: 5,
    Finalizada: true
},30));

//* Ejercicio 3:  Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
//? Se usa .split(string, caracter) para separar un string por caracter y guardar en un array
let separaGuarda = (input, caracter) => {
    if(typeof input === 'string'){
        let newInput = input.split(caracter)
        return newInput 
    }
}
console.log(separaGuarda("Enero,Frebrero,Marzo,abril Mayo", ","));

//* Ejercicio 4: Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
let repeticion = (data, j) => {
    if(typeof data === 'string' && j != 0 ){
        for(let i = 0; i < j; i++){
        console.log(data);   
        }
    }else{
        console.error(`${data} no es una cadena o elegiste repetir 0 veces`);
    }
}
repeticion("Adios", 4)

//* Ejercicio 5: Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
let invertir = (input2) => {
    if(typeof input2 === 'string'){
        return input2.split('').reverse().join('')
    }else{
        let toText = JSON.stringify(input2)
        let h = toText.split('').reverse().join('')
        return h
    }
}
console.log(invertir("Hola mundo"));
console.log(invertir({
    team: "Mexico",
    position: 15
}));

//* Ejercicio 6: Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
let contarPalabra = (cadena2, palabra) => {
    if(typeof cadena2 === 'string'){
        let expReg = new RegExp(palabra, 'gi') //g para que cuente todas, i para que no importe si son mayusculas o minusculas
        let coincidencias = cadena2.match(expReg)//match devuelve array con las condiciones encontradas
        let total = coincidencias ? coincidencias.length : 0
        return total
    }else{
        console.warn("No proporcionaste una cadena")
    }
}
console.log(contarPalabra("hola mundo hola que tal hola gente HOLA HOLA", "hola"));

//* Ejercicio 7: Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
let esPalindromo = (userInput) => {
    if(typeof userInput === 'string'){
        let arrG = userInput.split('').reverse().join('')
        if(arrG === userInput){
            console.log("Es palindrimo");
        } 
    }else{
        console.error('No es string');
    } 
}
esPalindromo('salas')
//* Ejercicio8: Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
let borraPatron = (cadena8, patron) => {
    if(typeof cadena8 === 'string'){
        let expReg = new RegExp(patron, "ig")
        return cadena8.replace(expReg, "")
    }else{
        console.warn("No ingresaste un string")
    }
}
console.log(borraPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
//* Ejericio9: Programa una función que obtenga un numero aleatorio entre 501 y 600.
let aleatorio = () => {
    aleatorio = Math.round((Math.random() * 100) + 500) 
    return aleatorio
}
console.log(aleatorio());
//* Ejercicio10: Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
let esCapicuo = (input10) => {
    if(typeof input10 === 'number'){
        let inverso = JSON.stringify(input10).split("").reverse().join()
        console.log(inverso);
        if(input10 == inverso){
            return true
        }else{
            return false
        }
    }else{
        console.warn(`${input10} no es un numero`)
    }
}
console.log(esCapicuo(1000));

//* Ejercicio11: Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
let factorial = (input11) => {
    if(typeof input11 === 'number'){
        let resultado = 1
        for(i=input11; i>=1; i--){
            resultado = resultado * i;
        }
        return resultado
    }else{
        return "No es un numero"
    }
}
console.log(factorial(5));
//* Ejercicio12: Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
let esPrimo = (input12 = undefined) => {
   if(input12 === undefined){return console.warn("No diste nungun valor")}
   if(Math.sign(input12) === -1){return console.warn("El numero no puede ser negativo")}
   if(input12 === 0){return console.warn("El numero no puede ser 0")}
   if(input12 === 1){return console.warn("El numero no puede ser 1")}
   if(typeof input12 != 'number'){return console.warn("El input no es un numero")}

   let divisible = false
   for(let i = 2; i < input12; i++){
        if((input12%i) === 0){
            divisible = true
            break
        }
   }
   if(divisible === false){
        return `El numero ${input12} SI es primo`
   }else{
        return `El numero ${input12} NO es primo`
   }  
}
console.log(esPrimo(7));
//*Ejercicio 13: Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
let esPar = (input13) => {
    if(typeof input13 === 'number'){
        if((input13%2) == 0){
            return 'Es par'
        }else{
            return 'No es par'
        }
    }else{
        return 'EL input no es un numero'
    }
}
console.log(esPar(1533));
//*Ejercicio 14: Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
let convertir = (input14, typo) => {
    if(typeof input14 === 'number'){
        if(typo == 'F'){
            let Celsius = (input14 - 32)/(1.8)
            return `${input14} grados Fahrenheit es igual a ${Celsius} grados celsius`
        }else if(typo == 'C'){
            let Fahrenheit = (input14 * 1.8) + 32
            return `${input14} grados Celsius es igual a ${Fahrenheit} grados Fahrenheit`
        }else{
            return `Error ${typo} no es un tipo de conversion valido`
        }
    }else{
        return "El input no es un numero"
    }
}
console.log(convertir(0,'C'))
//*Ejercicio15:Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10
let conversionBinarioDecimal = (input15,base ) => {
    if(input15 == undefined){return "El numero a convertir no puedes estar vacio"}
    if(input15 == base){return "La base del numero no puede estar vacia"}
    if(typeof input15 != 'number' ){return `El ${input15} debe de ser un numero`}
    if(Math.sign(input15) == -1){return `El ${input15} debe de ser un numero positivo`}

    if(base === 2){
        return `El numero ${input15} en base ${base} es: ${parseInt(input15,base)} en base 10` //? parceInt siempre devuelve base 10
    }else if(base === 10){
        return `El numero ${input15} en base ${base} es: ${input15.toString(2)} en base 2` //? 
    }else{
        return `El tipo de base a convertir no es valido`
    }
}
console.log(conversionBinarioDecimal(100,2));

//*Ejercicio16:Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
let aplicarDescuento = (input16, descuento) => {
    if(typeof input16 === 'number' && Math.sign(input16) != -1){
        let subtotal = input16*(descuento/100) 
        let total = input16 - subtotal
        return total
    }else{
        return `${input16} no es un numero o es un numero negativo`
    }
}
console.log(aplicarDescuento(100, 20))
//*Ejercicio17:Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
let calculaAnios = (input17) => {
    if(input17 === undefined) return "El input no pudes estar vacio"
    if(!(input17 instanceof Date)) return "El valor no es una fecha valida"
    
    if(new Date() > input17){
        let fechaResta = new Date().getTime() - input17.getTime()
        let aniosEnMS = 1000 * 60 * 60 * 24 * 365
        let resultado = Math.floor(fechaResta/aniosEnMS) //Floor redondea hacia abajo 
        return `Han pasado ${resultado} años hasta el dia de hoy`
    }else{
        let fechaResta = new Date().getTime() - input17.getTime()
        let aniosEnMS = 1000 * 60 * 60 * 24 * 365
        let resultado = Math.round(fechaResta/aniosEnMS) //Floor redondea hacia abajo 
        return `Faltan ${Math.abs(resultado)} años para llegar a ${input17.getFullYear()}`
    }
}
console.log(calculaAnios(new Date(2029,9,5)));
//*Ejercicio18:Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
let contarTipos = (input18) => {
    if(input18 === undefined) return 'El input no puede ser vacio'
    if(typeof input18 != 'string') return 'El input debe de ser una funcion'
    
    const vocales = ["a","e","i","o","u"]
    let arreglo = input18.toLocaleLowerCase().replaceAll(" ","").split("")
    console.log(arreglo);
    let resultadoVocales = arreglo.filter((vocal) => vocales.includes(vocal))
    let resultadoLetras = arreglo.length - resultadoVocales.length
    return `La cantidad de vocales es ${resultadoVocales.length} y el resultado de letras es ${resultadoLetras}`
}
console.log(contarTipos("Hola mundoo"));
//*Ejercicio19:Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
let validaNombre = (input19) => {
    if(input19 === undefined) return 'El input no puede estar vacio'
    if(typeof input19 != 'string') return `${input19} no es una cadena, el input debe ser texto`
    
    let regExp19 = /^[A-Za-zÑñáÁÉéÍíÓóÚú\s]+$/g.test(input19)
    return (regExp19) ? console.log('Es nombre valido') : console.log('El nombre no es valido');
}

//*Ejercicio20:Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
let validarEmail = (input20) => {
    if(input20 === undefined) return 'El input no puede estar vacio'
    if(typeof input20 != 'string') return `${input20} no es una cadena, el input debe ser texto`

    let expReg20 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(input20)
    return (expReg20) ? console.log("Es un email valido") : console.log("No es un nombre valido");
}
//* ME QUEDE EN EL VIDEO 6
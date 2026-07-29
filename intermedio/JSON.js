//* JSON funciona como un metodo de comunicacion entre varios lenguajes por ejemplo metodo de pago
//* Su sintaxis es con dobles comillas todos sus elementos (claves y valores por igual) 
console.log(JSON)
//TODO JSON.parse(): Analiza un JSON y lo convierte en un tipo de datos que sea valido en JS 
console.log('{}');
console.log('[1,2,3,4,5]');
console.log(JSON.parse('[1,2,3,4,5]'));
console.log(JSON.parse('{}'));
console.log(JSON.parse('false'));
console.log(JSON.parse('true'));
console.log(JSON.parse('"Hola mundo"'));
console.log(JSON.parse('null'));
//console.log(JSON.parse('undefined'));

//TODO JSON.stringify(): Combierte a cadena 
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3,4,5]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({x:2, y:3}));
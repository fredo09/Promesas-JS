//Nota: Las promesas nos pueden ayudar a escribir codigo asincrono

/*
let promise = new Promise(function (resolve, reject) {
    //la funcion se ejecutara automaticamente cuando se contruya la promesa

    // despues de cierto tiempo, indicara que la tarea esta hecha con el resultado "hecho"
    setTimeout(() => resolve("hecho"), 1000);
});

let promise2 = new Promise(function (resolve, reject) {

    // despues de cierto tiempo, indicara que la tarea esta hecha con el error
    setTimeout(() => reject(new Error('X(')), 1000);
});

//console.log(promise2);
*/
/**
*   CONSUMIEDORES THEN, CATCH, FANALLY
*   Sintaxis then
*
*   promise.then(
*       function(result) { manejo de un resultado exitoso }
*       function(error) { maneja un error }    
*   )
**/

// let promise3 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("hecho"), 2000);
// });

// // resolve ejecuta la primerta funcion en .then
// promise3.then(
//     result => console.log(result),
//     error => console.log(error)
// );

// let promise3 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error("hecho")), 2000);
// });

// // resolve ejecuta la primerta funcion en .then
// promise3.then(
//     result => console.log(result),
//     error => console.log(error)
// );


/********* Catch *********/
/*
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("X(")), 1000);
});

// .catch(f) es lo mismo que el promise.then()
promise.catch(); // muestra el Error X( despues de un segundo
*/
// finally llama .fanally(f) que es similar a .then(f, f)
/*
new Promise((resolve, reject) => {
  /* hacer algo para tomar tiempo y luego llamar a resolve/reject */
//})
/*
  // se ejecuta cuando se cumple la promesa, no importa con éxito o no
  .finally(() => stop loading indicator)
  // entonces el indicador de carga siempre es detenido antes de que procesemos result/error
  .then(result => show result, err => show error)
*/

// el manejo de finally traspasa resultados y errores al siguiente manejador
/*new Promise((resolve, reject) => {
    setTimeout(() => resolve("resultado"), 2000);
})
    .finally(() => console.log('Promesa lista'))
    .then(result => console.log(result)) // <--- .maneja el resultado
*/
/**
new Promise((resolve, reject) => {
    throw new Error('Ocurrio un error');
})
    .finally(() => console.log('Promesa Lista'))
    .catch(err => console.log(err)) // <--- .maneja el error
*/

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    });
}

delay(3000).then(() => console.log("ejecuta despues de 3 segundos")) 
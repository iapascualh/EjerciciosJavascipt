// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]
let numeros = ["3", "5", "7", "1", "6"]; //aqui se declara los numeros del arreglo
console.log("El número mayor en el arreglo " + numeros + " es: ");// este es el msj que mandara la consola del resultado
console.log(numMayor(numeros));//aqui se inserta la variable a la funcion 

function numMayor(x) {//aqui se realiza la funcion que se va a utlizar despues a nuestro let
  let max = x[0];// se declara la variable para la funcion
  for (let i=0; i < x.length; i++) {
    if (x[i]> max) {
      max = x[i];
    }//if
  } //for if
  return max;
}//numMayor


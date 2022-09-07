// María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: Dada una lista de números 
//[-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.
let numeros = [-1, -3, -4400, -12, -600]; //aqui se declara los numeros del arreglo
console.log("El número menor en el arreglo " + numeros + " es: ");// este es el msj que mandara la consola del resultado
console.log(numMenor(numeros));//aqui se inserta la variable a la funcion 

function numMenor(x) {//aqui se realiza la funcion que se va a utlizar despues a nuestro let
  let min = x[0];// se declara la variable para la funcion
  for (let i=-2; i < x.length; i++) {
    if (x[i]< min) {
      min = x[i];
    }//if
  } //for if
  return min;
}//numMenor


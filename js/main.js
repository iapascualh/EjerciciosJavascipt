/*Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] 
Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]*/
let numeros = [1, 2, 5, 14, 24, 31, 50, 105];//se declaran las variables
console.log(desorden(numeros));//se inserta lavariable en la funcion
function desorden(x) { // se crea en la funcion
  let xdes = new Array();//se declara la variable para la funcion
  for (let a = 0, b = x.length; a < x.length; a++,b--) {
if ((a%2)==0) {
  xdes[b] = x[a];
} else {
  xdes[a] = x[a];
}//cierre de if/else
    
  }//cierre del for
  return xdes;
}//cierre de la funcion
/* Escribir una función que permita saber si un número se repite dentro de un arreglo.
Blockquote Casos de prueba:
Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105] */
let numcaso1 = [1, 22, 5, 17, 10, 5, 40, 5];
let numcaso2 = [7, 41, 5, 7, 10, 13, 2];
let numcaso3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
let numrepetidos = function (x) {
  for (let a = 0; a < x.length; a++) {
    let cont = 0;
    for (let b = 0; b < x.length; b++) {
      if (x[a] == x[b]) {
        cont++;
      }//cierre if
      if (cont != 1)
        console.log(`el numero ${x[a]} se repite ${cont} veces`);
    }//cierre 2do for b

  }//cierre 1er for a
}//cierre de funcion numrepetidos
numrepetidos(numcaso2);//aqui se designa la variable para la funcion numrepetidos
// Array

/* 01 Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function SomaArray(array: number[]): void {
  let arraySomado = array.reduce(
    (acumulador, numerosSomados) => acumulador + numerosSomados,
    0
  );
  console.log(`Resultado: ${arraySomado}`);
}

SomaArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
*/

/* 02 Crie uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

function FiltarPares(array: number[]): void {
  let arrayFiltradoPares = array.filter(
    (numeroDoArray) => numeroDoArray % 2 == 0
  );
  console.log("Resultado: " + arrayFiltradoPares);
}

FiltarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
*/

/* 03 Crie uma função que receba um array de strings e retorne um novo array com as palavras ordenadas em ordem alfabética.

function OrdenarStrings(array: string[]): void {
  let arrayOrdenadoAlfabetica = array.sort(); // ordenar numeros: .sort((a, b) => a - b)
  console.log("Resultado: " + arrayOrdenadoAlfabetica);
}

OrdenarStrings(["n", "s", "a", "b"]);
*/

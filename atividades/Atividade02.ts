function RecebeArray(array: number[]): number {
  return array
    .filter((numeros) => numeros % 2 == 0)
    .reduce((acumulador, numeros) => acumulador + numeros, 0);
}

const result = RecebeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("====================================");
console.log("Resultado: " + result);
console.log("====================================");

// .FILTER
// No código, .filter(num => num % 2 === 0) cria um novo array apenas com os números pares,
// antes de somá-los com .reduce().

// .Reduce
//.reduce((acc, num) => acc + num, 0)
// soma todos esses números pares, começando do 0.

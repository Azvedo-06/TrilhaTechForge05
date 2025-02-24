/*01 Escreva um programa que recebe uma string e a imprime invertida.

function reverseString(str:string) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString("12345"));
*/

// 02 Encontrar o maior número em um array
function findMaxNumber(arr: number[]): number {
    let MaxNumber = arr.reduce((max, arr) => (arr > max ? arr : max))
    return MaxNumber;
}
  
console.log(findMaxNumber([10, 45, 78, 2, 99, 34])); 
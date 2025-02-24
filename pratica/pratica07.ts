//01 Escreva um programa que recebe uma string e a imprime invertida.

function reverseString(str:string) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString("12345"));

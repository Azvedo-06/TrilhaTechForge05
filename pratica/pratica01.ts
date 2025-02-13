import { log } from "console";
import { read } from "fs";

/* 01 Faça um algoritmo que tenha valores inteiros A, B, C e em seguida mostre na tela a soma entre A e B
e mostre se a soma é menor que C. 

let resultado:number

function CalcularABC( valorA:number, valorB:number, valorC:number ) { // codigo limpo: no maximo 3 parâmetros na função
    resultado = valorA + valorB;                                      
    if (resultado < valorC) {
        console.log("Resultado da soma A + B é menor que o valorC: " + valorC);
    }
    return resultado;
}

function MostrarResulado() { // codigo limpo: cada função faz determinada tarefa (um faz o calculo outra mostra o resultado)
    console.log("Resultado da soma A + B é: " + resultado );
}

CalcularABC(10, 15, 32);
MostrarResulado()
*/

/* 02 Faça um algoritmo que tenha um número qualquer e mostre na tela se o número é par ou ímpar 
console.log(43 % 2) Isso significa o resto da divisão por 2, se ela for zero, é par, se for maior que zero
é impar 

function imparOUpar(valor:number) {
    if (valor % 2 == 0) {
        console.log(`O valor ${valor} é par`);
    } else {
        console.log(`O valor ${valor} é impar`);
    }
}

imparOUpar(12);
*/

/* 03 Faça um algoritmo que tenha dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar 
os dois valores, senão devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir 
o resultado a uma variável C e mostrar seu valor na tela. 
Para multiplicar na programação, use asterístico(*) */

let resultado:number;
let resultadoTotal:number;

function CalcularValores(valor1:number, valor2:number, valor3:number) { // codigo limpo: maximo de 3 parâmetros na função e nome sugestivo a oque a função faz 
    if (valor1 == valor2) {
        resultado = valor1 + valor2;
    } else {
        resultado = valor1 * valor2;
    }
    resultadoTotal = resultado + valor3
    return resultadoTotal;
}

function MostrarValores() {
    return console.log(`Resultado: ${resultado} mais a soma do valor3 é: ${resultadoTotal}`);
}

CalcularValores(11, 10, 5);
MostrarValores();
import { log, table } from "console";

/* fase 01 - Implementação Livre

let kwh: number = 30
let kwhTotal: number 
let kwhFinal: number

let basica: number = 0.5

function calcular(): void {
    if (kwh >= 30 && kwh <= 49){
        console.log("Tarifa Amarela");
        let acrescimo: number = kwh * 0.02
        kwhTotal = (kwh * basica) + acrescimo
        kwhFinal = kwhTotal
        console.log("Total a pagar: " + kwhFinal.toFixed(2));
    } else if (kwh > 50) {
        console.log("Tarifa Vermelha");
        let acrescimo: number = kwh * 0.05
        kwhTotal = (kwh * basica) + acrescimo
        kwhFinal = kwhTotal
        console.log("Total a pagar: " + kwhFinal.toFixed(2));
    } else {
        console.log("Tarifa Verde");
        kwhTotal = (kwh * basica)
        kwhFinal = kwhTotal 
        console.log("Total a pagar: " + kwhFinal.toFixed(2));
    }
}

console.log("Consumo Kwh: " + kwh);
calcular()
*/

// fase 02 - Refatoração com Nomes Significativos

interface ConsumoEnergia { 
    kwh: number; 
    tarifa: number; 
    imposto: number; 
    bandeira: "verde" | "amarela" | "vermelha"; 
}

function calcularContaEnergia(consumo: ConsumoEnergia): string {
    const valorBase = calcularValorBase(consumo.kwh, consumo.tarifa)
    const ajusteBandeira = calcularAjusteBandeira(consumo.kwh, consumo.bandeira)
    const valorComBandeira = valorBase + ajusteBandeira;
    const imposto = calcularImposto(consumo.imposto, valorComBandeira)
    let valorFinal = (valorComBandeira + imposto) 
    // fase 03 - acrescimo ou desconto
    valorFinal = calcularDesconto(consumo.kwh, valorFinal)
    return valorFinal.toFixed(2);
}

function calcularValorBase(consumo: number, tarifa: number): number {
    return consumo * tarifa;
}

function calcularAjusteBandeira(consumo: number, bandeira: string): number {
  if (bandeira == "amarela") {
    return consumo * 0.02;
  } else if (bandeira == "vermelhar") {
    return consumo * 0.05;
  }
  // caso bandeira verde
  return 0;
}

function calcularImposto(valor: number, percentualImposto: number): number {
  return valor * (percentualImposto / 100); // porcentagem divide por 100
}

// fase 03 - acrescimo ou desconto
function calcularDesconto(consumo: number, valor: number): number {
    if (consumo <= 100) {
        console.log("Desconto de 5%");
        return valor * 0.95
    } else if (consumo >= 300) {
        console.log("Acrescimo de 10%");
        return valor * 1.10
    }
    return valor;
 }

const conta: ConsumoEnergia = {kwh: 300, tarifa: 0.5, imposto: 15, bandeira: "amarela"}
const total = calcularContaEnergia(conta);
console.log(`KWH total: ${conta.kwh} \ntotal a pagar: R$ ${total}`);
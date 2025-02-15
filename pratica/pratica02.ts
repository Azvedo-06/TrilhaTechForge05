let nomes = ["andre", "roberto", "JOAO"];
// FOR of : para acessar uma coleção de elementos do array
for (let ary of nomes) {
  console.log(ary);
}

console.log("====================================");

let arr = [10, 20, 30, 40];
// FOR in : itera por uma lista ou coleção e retorna um índice em cada iteração
for (var index in arr) {
  console.log(index, arr[index]); // index = prints indexes: 0, 1, 2, 3 || arr[index] = prints elements: 10, 20, 30, 40
}

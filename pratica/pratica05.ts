/* 01 Crie um array de objetos representando produtos, onde cada objeto tenha as propriedades: nome, preco e categoria.
Depois, filtre apenas os produtos que custam mais de R$ 50.

type Produto = {
  nome: string;
  preco: number;
};

const Produtos: Produto[] = [
  { nome: "abajur", preco: 120.0 },
  { nome: "camisa", preco: 20.0 },
  { nome: "relógio", preco: 75.0 },
  { nome: "boné", preco: 34.0 },
];

function FiltrarProdutosPorPreco( produtos: Produto[], precoMinino: number): Produto[] {
  return produtos.filter((produto) => produto.preco > precoMinino);
}

console.log(FiltrarProdutosPorPreco(Produtos, 50));
*/

/* 02 Crie um array de objetos representando pessoas, com as propriedades nome e idade.
Depois, calcule a soma de todas as idades usando .reduce().

type Pessoa = {
  nome: string,
  idade: number
}

const Pessoas: Pessoa[] = [
  {nome: "andré", idade: 18},
  {nome: "vitor", idade: 21},
  {nome: "anderson", idade: 26},
]

function SomarIdadePessoa(Pessoas:Pessoa[]) {
  let idadePessoasSomado = Pessoas.reduce((acumulador, Pessoa) => acumulador + Pessoa.idade, 0);
  console.log(`Idade de todas as pessoas somadas: ${idadePessoasSomado}`);
}

SomarIdadePessoa(Pessoas);
*/

/* 03 Crie um array de objetos representando alunos, onde cada objeto tenha as propriedades nome e nota.
Depois, encontre o aluno com a maior nota. */

type Student = {
  name: string,
  note: number
}

const Students: Student[] = [
  {name: "andré", note: 18},
  {name: "vitor", note: 21},
  {name: "anderson", note: 26},
]

function FindHighestNote(Students:Student[]) {
  return Students.reduce((best, Student) => (Student.note > best.note ? Student : best));
  // validacão: reduce começa a percorrer o array pelo primeiro aluno como o melhor(best) 
  // dai ele pula para o proximo aluno do array e compara suas notas e qual for maior vai ser o novo best

  // no ternario ? Student.note > best.note ? Student : best
  // Se Student.note > best.note for true, retorna Student (o novo melhor aluno).
  // Caso contrário, retorna best (mantém o melhor aluno anterior).
  // operadores ? e : são uma simplificação de if e else
 
}

const bestNote = FindHighestNote(Students);
console.log("Maior nota é: ", bestNote);
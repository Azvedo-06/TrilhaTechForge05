/* 01 Você tem um array de produtos e quer calcular o preço total apenas dos produtos que custam mais de R$50.
type Produto = {
    nome:string;
    preco: number;
};


const produtos: Produto[] = [
    {nome: "camisa", preco: 25},
    {nome: "calça", preco: 60},
    {nome: "tenis", preco: 120},
    {nome: "bone", preco: 30},
    {nome: "short", preco: 35},
];

function FiltrarProdutos50Mais(produtos:Produto[], precoMinino = 50) {
    return produtos.filter((produtos) => produtos.preco > precoMinino);
}

function SomarProdutos50Mais(produtosFiltrados50Mais: Produto[]) {
    const produtosSomados50Mais = produtosFiltrados50Mais.reduce((acumulador,produto) => acumulador + produto.preco, 0 );
    console.log("Preço produtos somados: " + produtosSomados50Mais);
}

const produtosFiltrados = FiltrarProdutos50Mais(produtos);
SomarProdutos50Mais(produtosFiltrados);
*/

/* 02 Dado um array de usuários, encontre o usuário com o e-mail "joao@email.com". 
type Usuario = {
    id: number;
    nome: string;
    email: string;
}

const usuarios: Usuario[] = [
    { id: 1, nome: "Maria", email: "maria@email.com" },
    { id: 2, nome: "João", email: "joao@email.com" },
    { id: 3, nome: "Ana", email: "ana@email.com" }
];

function EncontrarUsuario(usuarios: Usuario[]) {
   let usuarioEncontrado =  usuarios.find((usuarios, usuarioEncontrado) => usuarios.email == "joao@email.com");
   
   if (usuarioEncontrado) {
        console.log("Usuário encontrado: ", usuarioEncontrado);
    } else {
        console.log("Usuário não encontrado!");
    }
}

EncontrarUsuario(usuarios);
*/

/* 03 Dado um array de alunos, ordene-o por idade em ordem crescente.*/
type Aluno = { 
    nome: string;
    idade: number;
}

const alunos: Aluno[] = [
    { nome: "Carlos", idade: 21 },
    { nome: "Beatriz", idade: 19 },
    { nome: "Eduardo", idade: 23 },
    { nome: "Ana", idade: 20 }
];

function OrdenarAlunosPorIdadeCrescente(alunos: Aluno[]) {
    return alunos.sort((alunos, idadeAnos) => (alunos.idade > idadeAnos.idade ? 1 : -1))
}

const alunosOrdenadosPorIdadeCrescente = OrdenarAlunosPorIdadeCrescente(alunos);
console.log("Alunos Por idade Crescente: ", alunosOrdenadosPorIdadeCrescente);


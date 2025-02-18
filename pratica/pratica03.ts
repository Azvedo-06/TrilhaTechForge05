/* 01 Crie um enum chamado StatusPedido com os valores: "Pendente", "Processando", "Enviado" e "Entregue".
Depois, crie uma função que recebe um status e retorna uma mensagem correspondente. 

enum StatusPedido {
  Pendente = "Pendente",
  Processando = "Processando",
  Enviado = "Enviado",
  Entregue = "Entregue",
}

function VerificarStatus(status: StatusPedido) {
  switch (status) {
    case StatusPedido.Pendente:
      console.log("Pedido está Pendente");
      break;
    case StatusPedido.Entregue:
      console.log("Pedido já Entregue");
      break;
    case StatusPedido.Enviado:
      console.log("Pedido foi Enviado");
      break;
    case StatusPedido.Processando:
      console.log("Pedido sendo Processado");
      break;
    default:
      console.log("Pedido não encontrado");
  }
}

VerificarStatus(StatusPedido.Pendente);
*/

/* 02 Crie uma classe Carro com as propriedades marca, modelo e ano. Adicione um método exibirInfo()
que imprime uma mensagem com os detalhes do carro. 

class AutoMovel {
  private tipo: string; // carro ou moto
  private marca: string;
  private modelo: string;
  private ano: number;

  constructor(tipo: string, marca: string, modelo: string, ano: number) {
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInfor() {
    console.log(
      `${this.tipo.toUpperCase()} \n Marca: ${this.marca} \n Modelo: ${
        this.modelo
      } \n Ano: ${this.ano}`
    );
  }
}

const meuCarro = new AutoMovel("carro", "toyota", "corrola", 2022);
meuCarro.exibirInfor();

const minhaMoto = new AutoMovel("moto", "honda", "CG 125", 2024);
minhaMoto.exibirInfor();
*/

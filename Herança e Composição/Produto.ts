export class Produto {
  private nome: string;
  private categoria: string;
  private preco: number;

  constructor(nome: string, categoria: string, preco: number) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
  }

  toString(): string {
    return `Produto: ${this.nome} | Categoria: ${this.categoria} | Preço: R$${this.preco.toFixed(2)}`;
  }
}
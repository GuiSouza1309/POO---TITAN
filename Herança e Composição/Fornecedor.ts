import { Juridica } from "./Juridica";
import { Endereco } from "./Endereco";
import { SetorFornecedor } from "./SetorFornecedor";
import { Produto } from "./Produto";

export class Fornecedor extends Juridica {
  private setor: SetorFornecedor;
  private produto: Produto;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, cnpj: string, inscricaoEstadual: string, setor: SetorFornecedor, produto: Produto) {
    super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);
    this.setor = setor;
    this.produto = produto;
  }

  toString(): string {
    return `[Fornecedor] ${super.toString()} | Setor: ${this.setor} | ${this.produto.toString()}`;
  }
}
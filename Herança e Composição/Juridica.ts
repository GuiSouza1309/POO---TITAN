import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";

export abstract class Juridica extends Pessoa {
  protected cnpj: string;
  protected inscricaoEstadual: string;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, cnpj: string, inscricaoEstadual: string) {
    super(nome, telefone, email, endereco);
    this.cnpj = cnpj;
    this.inscricaoEstadual = inscricaoEstadual;
  }

  toString(): string {
    return `${super.toString()} | CNPJ: ${this.cnpj} | IE: ${this.inscricaoEstadual}`;
  }
}
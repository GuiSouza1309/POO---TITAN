import { Pessoa } from "./Pessoa";

export class Juridica extends Pessoa {
  private cnpj: string;
  private inscricaoEstadual: string;

  constructor(nome: string, telefone: string, cnpj: string, inscricaoEstadual: string) {
    super(nome, telefone);
    this.cnpj = cnpj;
    this.inscricaoEstadual = inscricaoEstadual;
  }

  toString(): string {
    return `Juridica { nome: ${this.nome}, telefone: ${this.telefone}, cnpj: ${this.cnpj}, inscricaoEstadual: ${this.inscricaoEstadual} }`;
  }
}
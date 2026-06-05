import { Pessoa } from "./Pessoa";

export class Fisica extends Pessoa {
  private cpf: string;
  private rg: string;
  private dataNascimento: Date;

  constructor(nome: string, telefone: string, cpf: string, rg: string, dataNascimento: Date) {
    super(nome, telefone);
    this.cpf = cpf;
    this.rg = rg;
    this.dataNascimento = dataNascimento;
  }

  getIdade(): number {
    const hoje = new Date();
    return hoje.getFullYear() - this.dataNascimento.getFullYear();
  }

  toString(): string {
    return `Fisica { nome: ${this.nome}, telefone: ${this.telefone}, cpf: ${this.cpf}, rg: ${this.rg}, dataNascimento: ${this.dataNascimento.toLocaleDateString()}, idade: ${this.getIdade()} }`;
  }
}
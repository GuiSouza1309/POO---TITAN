import { Juridica } from "./Juridica";
import { Endereco } from "./Endereco";

export class PrestacaoServico extends Juridica {
  private contratoInicio: Date;
  private contratoFim: Date;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, cnpj: string, inscricaoEstadual: string, contratoInicio: Date, contratoFim: Date) {
    super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);
    this.contratoInicio = contratoInicio;
    this.contratoFim = contratoFim;
  }

  toString(): string {
    return `[PrestacaoServico] ${super.toString()} | Contrato: ${this.contratoInicio.toLocaleDateString()} até ${this.contratoFim.toLocaleDateString()}`;
  }
}
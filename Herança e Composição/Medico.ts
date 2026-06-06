import { Funcionario } from "./Funcionario";
import { Endereco } from "./Endereco";
import { Genero } from "./Genero";
import { EstadoCivil } from "./EstadoCivil";
import { Setor } from "./Setor";
import type { SalarioFinal } from "./SalarioFinal";

export class Medico extends Funcionario implements SalarioFinal {
  private crm: string;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: Setor, salario: number, crm: string) {
    super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
    this.crm = crm;
  }

  getSalarioFinal(): number {
    return this.salario;
  }

  toString(): string {
    return `[Médico] ${super.toString()} | CRM: ${this.crm}`;
  }
}
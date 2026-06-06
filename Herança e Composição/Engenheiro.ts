import { Funcionario } from "./Funcionario";
import { Endereco } from "./Endereco";
import { Genero } from "./Genero";
import { EstadoCivil } from "./EstadoCivil";
import { SetorFuncionario } from "./SetorFuncionario";
import type { SalarioFinal } from "./SalarioFinal";

export class Engenheiro extends Funcionario implements SalarioFinal {
  private crea: string;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: SetorFuncionario, salario: number, crea: string) {
    super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
    this.crea = crea;
  }

  getSalarioFinal(): number {
    return this.salario;
  }

  toString(): string {
    return `[Engenheiro] ${super.toString()} | CREA: ${this.crea}`;
  }
}
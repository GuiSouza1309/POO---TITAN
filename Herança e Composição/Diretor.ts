import { Funcionario } from "./Funcionario";
import { Endereco } from "./Endereco";
import { Genero } from "./Genero";
import { EstadoCivil } from "./EstadoCivil";
import { SetorFuncionario } from "./SetorFuncionario";
import type { SalarioFinal } from "./SalarioFinal";
import type { Contratacao } from "./Contratacao";

export class Diretor extends Funcionario implements SalarioFinal, Contratacao {
  static readonly PREMIO: number = 0.2;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: SetorFuncionario, salario: number) {
    super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
  }

  getSalarioFinal(): number {
    return this.salario + this.salario * Diretor.PREMIO;
  }

  admitir(funcionario: Funcionario): void {
    console.log(`Funcionário ${funcionario.toString()} admitido pelo Diretor ${this.nome}.`);
  }

  demitir(funcionario: Funcionario): void {
    console.log(`Funcionário ${funcionario.toString()} demitido pelo Diretor ${this.nome}.`);
  }

  toString(): string {
    return `[Diretor] ${super.toString()} | Salário Final: R$${this.getSalarioFinal().toFixed(2)}`;
  }
}
import { Funcionario } from "./Funcionario";
import { Endereco } from "./Endereco";
import { Genero } from "./Genero";
import { EstadoCivil } from "./EstadoCivil";
import { SetorFuncionario } from "./SetorFuncionario";
import type { SalarioFinal } from "./SalarioFinal";

export class Motoboy extends Funcionario implements SalarioFinal {
  private carteiraDeHabilitacao: string;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: SetorFuncionario, salario: number, carteiraDeHabilitacao: string) {
    super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
    this.carteiraDeHabilitacao = carteiraDeHabilitacao;
  }

  getSalarioFinal(): number {
    return this.salario;
  }

  toString(): string {
    return `[Motoboy] ${super.toString()} | CNH: ${this.carteiraDeHabilitacao}`;
  }
}
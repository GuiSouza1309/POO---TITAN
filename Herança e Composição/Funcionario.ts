import { Fisica } from "./Fisica";
import { Endereco } from "./Endereco";
import { Genero } from "./Genero";
import { EstadoCivil } from "./EstadoCivil";
import { SetorFuncionario } from "./SetorFuncionario";

export abstract class Funcionario extends Fisica {
  protected cpf: string;
  protected rg: string;
  protected matricula: string;
  protected setor: SetorFuncionario;
  protected salario: number;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: SetorFuncionario, salario: number) {
    super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento);
    this.cpf = cpf;
    this.rg = rg;
    this.matricula = matricula;
    this.setor = setor;
    this.salario = salario;
  }

  toString(): string {
    return `${super.toString()} | CPF: ${this.cpf} | Matrícula: ${this.matricula} | Setor: ${this.setor} | Salário: R$${this.salario.toFixed(2)}`;
  }
}
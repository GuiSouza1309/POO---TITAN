import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";
import { Genero } from "./Genero";
import { EstadoCivil } from "./EstadoCivil";

export abstract class Fisica extends Pessoa {
  protected genero: Genero;
  protected estadoCivil: EstadoCivil;
  protected dataNascimento: Date;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date) {
    super(nome, telefone, email, endereco);
    this.genero = genero;
    this.estadoCivil = estadoCivil;
    this.dataNascimento = dataNascimento;
  }

  getIdade(): number {
    return new Date().getFullYear() - this.dataNascimento.getFullYear();
  }
}
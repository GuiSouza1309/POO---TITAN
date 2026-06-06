import { Endereco } from "./Endereco";

export abstract class Pessoa {
  protected nome: string;
  protected telefone: string;
  protected email: string;
  protected endereco: Endereco;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;
  }

  toString(): string {
    return `Nome: ${this.nome} | Tel: ${this.telefone} | Email: ${this.email} | Endereço: ${this.endereco.toString()}`;
  }
}
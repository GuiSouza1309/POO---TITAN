export abstract class Pessoa {
  protected nome: string;
  protected telefone: string;

  constructor(nome: string, telefone: string) {
    this.nome = nome;
    this.telefone = telefone;
  }
}
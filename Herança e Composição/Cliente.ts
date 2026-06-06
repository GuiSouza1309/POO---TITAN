import { Fisica } from "./Fisica";
import { Endereco } from "./Endereco";
import { Genero } from "./Genero";
import { EstadoCivil } from "./EstadoCivil";

export class Cliente extends Fisica {
  private protocoloAtendimento: number;

  constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, protocoloAtendimento: number) {
    super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento);
    this.protocoloAtendimento = protocoloAtendimento;
  }

  toString(): string {
    return `[Cliente] ${super.toString()} | Protocolo: ${this.protocoloAtendimento}`;
  }
}
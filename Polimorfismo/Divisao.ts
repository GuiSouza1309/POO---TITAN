import { OperacaoMatematica } from "./OperacaoMatematica";

export class Divisao implements OperacaoMatematica {
  calcular(a: number, b: number): number {
    if (b === 0) throw new Error("Divisão por zero!");
    return a / b;
  }
}
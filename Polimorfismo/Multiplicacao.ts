import { OperacaoMatematica } from "./OperacaoMatematica";

export class Multiplicacao implements OperacaoMatematica {
  calcular(a: number, b: number): number {
    return a * b;
  }
}
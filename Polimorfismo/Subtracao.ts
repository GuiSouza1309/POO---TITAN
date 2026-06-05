import { OperacaoMatematica } from "./OperacaoMatematica";

export class Subtracao implements OperacaoMatematica {
  calcular(a: number, b: number): number {
    return a - b;
  }
}
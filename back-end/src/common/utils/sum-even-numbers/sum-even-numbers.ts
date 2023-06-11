import { isEven } from '../is-even/is-even';

export function sumEvenNumbers(integers: number[]): number {
  return integers.reduce((sum, int) => (isEven(int) ? (sum += int) : sum), 0);
}

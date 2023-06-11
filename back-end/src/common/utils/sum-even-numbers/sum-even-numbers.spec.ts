import { sumEvenNumbers } from './sum-even-numbers';

describe('sumEvenNumbers', () => {
  describe('when odd numbers provided', () => {
    it('will return 0', () => {
      const oddNubmersList = [1, 3, 5, 7, 9, 11];

      expect(sumEvenNumbers(oddNubmersList)).toBe(0);
    });
  });

  describe('when even numbers provided', () => {
    it('will return sum of numbers', () => {
      const evenNumbersList = [2, 4, 2];

      expect(sumEvenNumbers(evenNumbersList)).toBe(8);
    });
  });

  describe('when list of mixed values provided', () => {
    it('will return sum of even numbers', () => {
      const mixedNumbersList = [1, 2, 5, 4, 2];

      // 2 + 2 + 4
      const expectedResult = 8;

      expect(sumEvenNumbers(mixedNumbersList)).toBe(expectedResult);
    });
  });

  describe('when list of zeroes provided', () => {
    it('will return zero', () => {
      const zeroNumbersLIst = [0, 0, 0, 0];

      expect(sumEvenNumbers(zeroNumbersLIst)).toBe(0);
    });
  });
});

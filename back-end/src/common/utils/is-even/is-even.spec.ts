import { isEven } from './is-even';

describe('isEven', () => {
  describe('when odd value provided', () => {
    it('will return false', () => {
      expect(isEven(1)).toBe(false);
    });
  });

  describe('when even value provided', () => {
    it('will return true', () => {
      expect(isEven(2)).toBe(true);
    });
  });

  describe('when negative value provided', () => {
    it('will return true when negative even number provided', () => {
      expect(isEven(-2)).toBe(true);
    });

    it('will return false when odd negative number provided', () => {
      expect(isEven(-1)).toBe(false);
    });
  });
});

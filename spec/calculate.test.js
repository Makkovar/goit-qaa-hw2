const calculateRectangleArea= require('../calculate');

describe('Calculate Rectangle Area', () => {
    it('calculates the area of a rectangle with dimensions 5 by 4', () => {
      expect(calculateRectangleArea(5, 4)).toBe(20);
    });
    it('calculates the area of a rectangle with dimensions 3 by 7', () => {
      expect(calculateRectangleArea(3, 7)).toBe(21);
    });
    it('calculates the area of a rectangle with dimensions 10 by 10', () => {
      expect(calculateRectangleArea(10, 10)).toBe(100);
    });
  });
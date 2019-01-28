const { test, expect, describe } = require('./beerjs');
const { sum, subtr } = require('./math');

describe('math.js', () => {
  test('should sum two numbers', () => {
    expect(sum(2, 2)).toBe(3);
  });

  test('should subtract two numbers', () => {
    expect(sum(5, 2)).toBe(7);
  });
});

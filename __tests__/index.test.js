// __tests__/index.test.js
const { isLandscape } = require('../index');

test('should return true for landscape mode', () => {
  expect(isLandscape(800, 600)).toBe(true);
});

test('should return false for portrait mode', () => {
  expect(isLandscape(600, 800)).toBe(false);
});

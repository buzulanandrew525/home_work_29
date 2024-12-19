const ageClassification = require('../age');

test('Age -1 should return: null', () => {
  expect(ageClassification(-1)).toBe(null);
});
test('Age 0 should return: null', () => {
  expect(ageClassification(0)).toBe(null);
});
test('Age 1 should return: Дитинство', () => {
  expect(ageClassification(1)).toBe('Дитинство');
});
test('Age 24 should return: Дитинство', () => {
  expect(ageClassification(24)).toBe('Дитинство');
});
test('Age 24,01 should return: Молодість', () => {
  expect(ageClassification(24.01)).toBe('Молодість');
});
test('Age 44 should return: Молодість', () => {
  expect(ageClassification(44)).toBe('Молодість');
});
test('Age 44,01 should return: Зрілість', () => {
  expect(ageClassification(44.01)).toBe('Зрілість');
});
test('Age 65 should return: Зрілість', () => {
  expect(ageClassification(65)).toBe('Зрілість');
});
test('Age 65.1 should return: Старість', () => {
  expect(ageClassification(65.1)).toBe('Старість');
});
test('Age 75 should return: Старість', () => {
  expect(ageClassification(75)).toBe('Старість');
});
test('Age 75.01 should return: Довголіття', () => {
  expect(ageClassification(75.01)).toBe('Довголіття');
});
test('Age 90 should return: Довголіття', () => {
  expect(ageClassification(90)).toBe('Довголіття');
});
test('Age 90.01 should return: Рекорд', () => {
  expect(ageClassification(90.01)).toBe('Рекорд');
});
test('Age 122 should return: Рекорд', () => {
  expect(ageClassification(122)).toBe('Рекорд');
});
test('Age 122.01 should return: null', () => {
  expect(ageClassification(122.01)).toBe(null);
});
test('Age 150 should return: null', () => {
  expect(ageClassification(150)).toBe(null);
});

const weekFn = require('../week');

test('Day 1 should return: Понеділок', () => {
  expect(weekFn(1)).toBe('Понеділок');
});
test('Day 3 should return: Середа', () => {
  expect(weekFn(3)).toBe('Середа');
});
test('Day 7 should return: Неділя', () => {
  expect(weekFn(7)).toBe('Неділя');
});
test('Day 9 should return: null', () => {
  expect(weekFn(9)).toBe(null);
});
test('Day 1.5 should return: null', () => {
  expect(weekFn(1.5)).toBe(null);
});
test('Day "2" should return: null', () => {
  expect(weekFn('2')).toBe(null);
});






console.log(weekFn(1))   // 'Понеділок'
console.log(weekFn(3))   // 'Середа'
console.log(weekFn(7))   // 'Неділя'
console.log(weekFn(9))   // null
console.log(weekFn(1.5)) // null
console.log(weekFn('2')) // null

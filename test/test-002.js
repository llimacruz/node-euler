const assert = require('chai').assert;
const findSum = require('../lib/problem-002.js');

it('Menor que 10', () => {
  const sum = findSum(10);
  assert.equal(sum, 10);
});

it('Menor que 4000000', () => {
  const sum = findSum(4000000);
  assert.equal(sum, 4613732);
});

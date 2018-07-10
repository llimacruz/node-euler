const assert = require('chai').assert;
const findSum = require('../lib/problem-001.js');

it('Menor que 10', () => {
  const sum = findSum(10);
  assert.equal(sum, 23);
});

it('Menor que 1000', () => {
  const sum = findSum(1000);
  assert.equal(sum, 233168);
});

const assert = require('assert');
const { sum, multiple } = require('../src/math');

describe('sum', () => {
  it('should work', () => {
    assert(sum(1, 1), 2);
  });
});

describe('multiple', () => {
  it('should work', () => {
    assert(multiple(2, 3), 6);
  });
});
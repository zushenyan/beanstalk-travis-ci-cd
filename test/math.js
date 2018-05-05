const assert = require('assert');
const { sum } = require('../src/math');

describe('sum', () => {
  it('should work', () => {
    assert(sum(1, 1), 2);
  });
});
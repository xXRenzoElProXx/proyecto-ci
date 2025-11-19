const sum = require('./sum');

test('4 + 6 = 10', () => {
    expect(sum(4, 6)).toBe(10);
});

test('-3 + 8 = 5', () => {
    expect(sum(-3, 8)).toBe(5);
});

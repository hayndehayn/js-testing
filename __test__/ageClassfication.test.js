const ageClassification = require('./ageClassification');

test('Correctly classified age', () => {
    expect(ageClassification(0)).toBe('Дитинство');
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(65)).toBe('Зрілість');
    expect(ageClassification(122)).toBe('Рекорд');
});

test('Correctly classified age', () => {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
});
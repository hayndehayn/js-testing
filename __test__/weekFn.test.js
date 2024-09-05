const weekFn = require('../weekFn');

test('Weekfn correct days', () => {
    expect(weekFn(1)).toBe('Понеділок');
    expect(weekFn(2)).toBe('Вівторок');
    expect(weekFn(3)).toBe('Середа');
    expect(weekFn(4)).toBe('Четвер');
    expect(weekFn(5)).toBe('П\'ятниця');
    expect(weekFn(6)).toBe('Субота');
    expect(weekFn(7)).toBe('Неділя');
});

test('Correct nulls', () => {
    expect(weekFn(-1)).toBe(null)
    expect(weekFn(2.5)).toBe(null)
    expect(weekFn('2')).toBe(null)
    expect(weekFn(8)).toBe(null)
})
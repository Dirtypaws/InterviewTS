import { SUT } from '../src/index';
import '../src/StringExtensions';

test.each([
    ["a1b2c3", 123],
    ["abc123", 123],
    ["abcdef", 123],
    ["adf.0.dfeao", 0],
    ["", null],
    [null, null]
 ])('Should parse string as nullable int', async (input, expected) => {
    let result = input.toNullableInt();
    expect(result).toBe(expected);
});

test.each([
    ["a1b2c3", 6],
    ["abcdef", 0],
    ["456", 15],
    ["", null],
    [null, null]
])('Should sum numbers in string', async (input, expected) => {
    let sut = new SUT();
    let result = sut.sum(input);

    expect(result).toBe(expected);
});
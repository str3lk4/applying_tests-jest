const commonAndre = require('../index.js');
const arabicToRoman = commonAndre.arabicToRoman;
const arabicToRomanSplit = commonAndre.arabicToRomanSplit;

describe("It must translate the basic natural numbers, from 1 to 10: ", () => {
    test('Basic numbers: ', () => {
        expect(arabicToRoman(1)).toBe('I');
        expect(arabicToRoman(2)).toBe('II');
        expect(arabicToRoman(8)).toBe('VIII');
        expect(arabicToRoman(5)).toBe('V');
        expect(arabicToRoman(4)).toBe('IV');
    });
});

describe("Now, we have to find a way to print te bigger numbers: ", () => {
    test('The simple decimals: ', () => {
        expect(arabicToRomanSplit(12)).toBe('XII');
        expect(arabicToRomanSplit(17)).toBe('XVII');
        expect(arabicToRomanSplit(19)).toBe('XIX');
        expect(arabicToRomanSplit(11)).toBe('XI');
        expect(arabicToRomanSplit(14)).toBe('XIV');
        expect(arabicToRomanSplit(10)).toBe('X');
    });
    test('Or, the rest of them: ', () => {
        expect(arabicToRomanSplit(22)).toBe('XXII');
        expect(arabicToRomanSplit(57)).toBe('LVII');
        expect(arabicToRomanSplit(89)).toBe('LXXXIX');
        expect(arabicToRomanSplit(41)).toBe('XLI');
        expect(arabicToRomanSplit(64)).toBe('LXIV');
    });
    test('And, now, the hundreds! ', () => {
        expect(arabicToRomanSplit(100)).toBe('C');
        expect(arabicToRomanSplit(200)).toBe('CC');
        expect(arabicToRomanSplit(234)).toBe('CCXXXIV');
        expect(arabicToRomanSplit(293)).toBe('CCXCIII');
        expect(arabicToRomanSplit(192)).toBe('CXCII');
        expect(arabicToRomanSplit(999)).toBe('CMXCIX');
    });
});

describe("Now, that's something else: ", () => {
    test("What if it didn't knew the number? ", () => {
        expect(arabicToRomanSplit(849879)).toBe("Don't know this number, sorry.");
        expect(arabicToRomanSplit(156498)).toBe("Don't know this number, sorry.");
    });
    test("What if I didn't insert a NUMBER AT ALL??? ", () => {
        expect(arabicToRomanSplit('number???')).toBe("That's not even a number, bro.");
        expect(arabicToRomanSplit('156')).toBe("That's not even a number, bro.");
        expect(arabicToRomanSplit(NaN)).toBe("That's not even a number, bro.");
        expect(arabicToRomanSplit(Infinity)).toBe("That's not even a number, bro.");
    });
});
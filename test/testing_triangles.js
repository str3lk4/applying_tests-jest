const commonAndre = require('../index.js');
const validarNumero = commonAndre.validarNumero;
const validarTriangulo = commonAndre.validarTriangulo;
const tipoTriangulo = commonAndre.tipoTriangulo;
const calcularPerimetro = commonAndre.calcularPerimetro;

// ----------------------------------------------------------------------------------------------

// BATERIA DE VALIDAÇÃO NUMÉRICA: 

describe("It verifies if the arguments of validarNumero are 'numbers'", () => {
    test('Basic verifications: ', () => {
        expect(validarNumero(2, 5, 'salt')).toBe(false);
        expect(validarNumero(2, 5, 1)).toBe(true);
        expect(validarNumero(NaN, 55, 'salt')).toBe(false);
        expect(validarNumero(Infinity)).toBe(false);
        expect(validarNumero(true)).toBe(false);
        expect(validarNumero(5)).toBe(true);
    });
    test('Only wrong ones: ', () => {
        expect(validarNumero('that', 'is', 'something else')).toBe(false);
        expect(validarNumero(false, NaN)).toBe(false);
    });
    test('Only right ones: ', () => {
        expect(validarNumero(1, 5, 8)).toBe(true);
        expect(validarNumero(5116551653491658194, 86103516984, 529849641684797)).toBe(true);
        expect(validarNumero(4891368413561487, 89415459789423148, 123879874187)).toBe(true);
        expect(validarNumero(6598484146586, 98458103654698, 123135498352641684)).toBe(true);
    });
});

// ----------------------------------------------------------------------------------------------

// BATERIA DE VALIDAÇÃO DE TRIÂNGULOS: 

describe ("It has more than 4 sides? ", () => {
    test("It has: ", () => {
        expect(validarTriangulo(3, 4, 6, 1)).toBe(false);
        expect(validarTriangulo(3, 4, 6, 1, 8, 7)).toBe(false);
        expect(validarTriangulo(3)).toBe(false);
        expect(validarTriangulo(3, 4)).toBe(false);
        expect(validarTriangulo()).toBe(false);
    });
    test("It has exactly 3 sides: ", () => {
        expect(validarTriangulo(3, 4, 6)).toBe(true);
        expect(validarTriangulo(10, 8, 7)).toBe(true);
        expect(validarTriangulo(7, 5, 9)).toBe(true);
    });
});

// ----------------------------------------------------------------------------------------------

// BATERIA DE TIPOS DE TRIÂNGULO: 

describe ("Which kind of triangle is it? ", () => {
    test("All sides are equal: ", () => {
        expect(tipoTriangulo(5, 5, 5)).toBe('EQUILATERO');
        expect(tipoTriangulo(9, 9, 9)).toBe('EQUILATERO');
        expect(tipoTriangulo(7, 7, 7)).toBe('EQUILATERO');
    });
    test("None is: ", () => {
        expect(tipoTriangulo(10, 8, 7)).toBe('ESCALENO');
        expect(tipoTriangulo(7, 5, 9)).toBe('ESCALENO');
        expect(tipoTriangulo(9, 5, 6)).toBe('ESCALENO');
    });
    test("Two sides are: ", () => {
        expect(tipoTriangulo(8, 10, 8)).toBe('ISOSCELES');
        expect(tipoTriangulo(11, 10, 11)).toBe('ISOSCELES');
        expect(tipoTriangulo(12, 10, 12)).toBe('ISOSCELES');
    });
});

// ----------------------------------------------------------------------------------------------

// BATERIA DE PERIMETROS:

describe ("Sum of the sides of a triangle: ", () => {
    test("That's not a triangle!? ", () => {
        expect(calcularPerimetro(3, 4, 6, 1)).toBe(undefined);
        expect(calcularPerimetro(3, 4, 6, 1, 8, 7)).toBe(undefined);
        expect(calcularPerimetro(3)).toBe(undefined);
        expect(calcularPerimetro(3, 4)).toBe(undefined);
        expect(calcularPerimetro()).toBe(undefined);
    });
    test("That, son, is a triangle: ", () => {
        expect(calcularPerimetro(10, 8, 7)).toBe(10 + 8 + 7);
        expect(calcularPerimetro(7, 5, 9)).toBe(7 + 5 + 9);
        expect(calcularPerimetro(9, 5, 6)).toBe(9 + 5 + 6);
        expect(calcularPerimetro(8, 10, 8)).toBe(8 + 10 + 8);
        expect(calcularPerimetro(11, 10, 11)).toBe(11 + 10 + 11);
        expect(calcularPerimetro(12, 10, 12)).toBe(12 + 10 + 12);
    });
});
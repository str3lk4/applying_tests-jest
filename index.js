/* 4. Crie um objeto Triangulo, que receba os tamanhos A, B e C representando o tamanho de cada lado do triangulo.
    Implemente as seguintes funções:

    • validarTriangulo(): essa função deve retornar TRUE no caso de ser possível construir um triangulo com essas medidas de lado e FALSE caso contrário. XX

    • tipoTriangulo(): essa função deve retornar o tipo do triangulo, se é ESCALENO, EQUILÁTERO ou ISÓSCELES. XX

    • calcularPerimetro(): calcular e retornar o valor do perímetro SOMENTE SE O TRIANGULO FOR POSSÍVEL DE MONTAR! XX

    • calcularArea(): calcular e retornar a área do triangulo.

        ** Levando em consideração que todos os lados do triângulo são conhecidos nesta fórmula, utilizaremos a Fórmula de Heron, ou Teorema de Herão, para encontrarmos sua área.
        
            A fórmula usa o semiperímetro e os lados do triângulo: 
            áreaTriangulo = √ p * (p-a) * (p-b) * (p-c) 
            p = (a + b + c)/2.**

    -- Implementação realizada:
    
    • validarNumero(): verifica se o argumento inserido na função é, de fato, um número. XX

*/

// Number.isFinite takes in consideration that we can receive NaN as a answer, as well as Infinity, so we're only using number, but also numbers that're finite. Of course, we can have a "infinite" triangle sort to say; but that's not realistic to our normal day usage.

function validarNumero() {
    for (let i = 0; i < arguments.length; i++) {
        if ((Number.isFinite(arguments[i]) == true) && ((typeof arguments[i]) == "number")) {
            if (i == (arguments.length - 1)) { return true; }
        } else {
            return false;
        }
    }
}

module.exports.validarNumero = validarNumero;

// ----------------------------------------------------------------------------------------------

// Here, we use the existance condition, we have Math.abs to take the value of the module of the difference between the two other sides of a triangle. And the AND logic operator stands that not only the side have to be bigger than the module of the difference, but also smaller than the sum of the other two sides.

function validarTriangulo() {
    if (arguments.length > 3 || arguments.length < 3) { return false; } // Deve ser exatamente 3
    let isItPossible = false;
    const args = Array.from(arguments);
    const a = args[0]; // Aqui, recebemos os lados do triângulo, levando em 
    const b = args[1]; // consideração que não temos necessariamente um "limite"
    const c = args[2]; // de argumentos inseridos, mas só podemos analisar c/ 3 lados!

    if ((Math.abs(a - b) < c) && (c < a + b)) { isItPossible = true; } else { return false; };
    if ((Math.abs(a - c) < b) && (b < a + c)) { isItPossible = true; } else { return false; };
    if ((Math.abs(b - c) < a) && (a < b + c)) { isItPossible = true; } else { return false; };

    return isItPossible;
}

module.exports.validarTriangulo = validarTriangulo; 

// ----------------------------------------------------------------------------------------------

function tipoTriangulo(a, b, c) {
    if ( validarNumero(a, b, c) == true ) { isTriangle = validarTriangulo.apply(null, arguments); }
    else {return undefined}

    if (isTriangle == true) {
        let countingEqualities = 0;

        (a == b) ? countingEqualities++ : "";
        (b == c) ? countingEqualities++ : "";
        (c == a) ? countingEqualities++ : "";
        // We're only verifying if the triangle has sides that're equals.

        switch (countingEqualities) {
            case 0:
                return 'ESCALENO';
            case 1:
                return 'ISOSCELES';
            case 3:
                return 'EQUILATERO';
        }
    } else {
        return undefined;
    }
}

module.exports.tipoTriangulo = tipoTriangulo;

// ----------------------------------------------------------------------------------------------

function calcularPerimetro(a, b, c) {
    if (validarTriangulo.apply(null, arguments) == true) { return a + b + c; }
    else { return undefined; }
}

module.exports.calcularPerimetro = calcularPerimetro;

/* Resolva o exercício que converte números Naturais para números Romanos usando Objetos. */

// Importação dos Dicionários relativos à cada casa numérica dos números romanos/arábicos.

const dicLibrary = require('./dictionaries/arabic_dictionaries');
const { peopleListing } = require('./dictionaries/people_relation');
const dictUnities = dicLibrary.dictUnities;
const dicDecimals = dicLibrary.dicDecimals;
const dicHundreds = dicLibrary.dicHundreds;

// ---------------------------------------------------------------------------------------

// Primeiramente, importante conseguirmos separar e entendermos o que nós queremos que o código realize: 
// Eu quero que ele TRADUZA números arábicos para romanos. Sendo assim, esse código inicial já serve.

function arabicToRoman(arabicNum) {
    switch (arabicNum) {
        case 1:
            return dictUnities[1];
        case 2:
            return dictUnities[2];
        case 3:
            return dictUnities[3];
        case 4:
            return dictUnities[4];
        case 5:
            return dictUnities[5];
        case 6:
            return dictUnities[6];
        case 7:
            return dictUnities[7];
        case 8:
            return dictUnities[8];
        case 9:
            return dictUnities[9];
        case 10:
            return dictUnities[10];
    }
}

// Agora, seguindo a premissa base, entendemos que: servir é diferente de fazer bem, ou fazer melhor:

function arabicToRomanSplit(arabicNum) {
    if (((Number.isFinite(arabicNum) == true) && (typeof arabicNum) == "number")) {
        let structureNum = String(arabicNum);
        if (structureNum.length == 2) {
            return dicDecimals[(structureNum.slice(0, 1))] +
                dictUnities[(structureNum.slice(1, 2))];
        } if (structureNum.length == 3) {
            return dicHundreds[(structureNum.slice(0, 1))] +
                dicDecimals[(structureNum.slice(1, 2))] +
                dictUnities[(structureNum.slice(2, 3))];
        } else {
            return "Don't know this number, sorry.";
        }
    } else {
        return "That's not even a number, bro.";
    }
}

module.exports.arabicToRoman = arabicToRoman;
module.exports.arabicToRomanSplit = arabicToRomanSplit;

/* Entrar com um nome, idade e sexo de 20 pessoas.
Imprimir o nome se a pessoa for do sexo masculino e tiver mais de 27 anos. */

// Inicialmente, novamente, eu quero que a função realize uma operação simples: retornar um resultado a partir de dois argumentos, num cruzamento de dados!

function returningArrayPeople(sexoItem, idadeItem) {
    let peoplesRelation = [];
    for (let i = 0; i < peopleListing.length; i++) {
        if ((peopleListing[i].sexo == sexoItem) && (peopleListing[i].idade > idadeItem)) {
            peoplesRelation.push(peopleListing[i]['nome']);
        }
    }
    return peoplesRelation;
}

module.exports.returningArrayPeople = returningArrayPeople;


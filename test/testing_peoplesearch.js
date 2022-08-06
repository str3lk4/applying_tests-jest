const commonAndre = require('../index.js');
const returningArrayPeople = commonAndre.returningArrayPeople;

describe("Should show some basic searches correlations: ", () => {
    test('Some are correct: ', () => {
        expect(returningArrayPeople('F', 30))
            .toEqual(expect.arrayContaining(['Natália']));
        expect(returningArrayPeople('M', 24))
            .toEqual(expect.arrayContaining(['Marcus Vinicius', 'André']));
        expect(returningArrayPeople('F', 20))
            .toEqual(expect.arrayContaining(['Natália', 'Lizandra']));
    });
    test("Others, aren't: ", () => {
        expect(returningArrayPeople('M', 30))
            .toEqual(expect.not.arrayContaining(['André']));
        expect(returningArrayPeople('F', 50))
            .toEqual(expect.not.arrayContaining(['Natália']));
    })
});
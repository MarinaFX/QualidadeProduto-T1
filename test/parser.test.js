const parserAge2Days = require('../src/index');

//Case test 400
describe('Parser age 2 days', () => {
    test('when days are 400', () => {
        const days = 400;
        const expectedAnswer = `\n 1 ano(s) \n 1 mes(es) \n 5 dia(s)`

        expect(parserAge2Days(days)).toEqual(expectedAnswer);
    });

    test('when days are 800', () => {
        const days = 800;
        const expectedAnswer = `\n 2 ano(s) \n 2 mes(es) \n 10 dia(s)`

        expect(parserAge2Days(days)).toEqual(expectedAnswer);
    });

    test('when days are 30', () => {
        const days = 30;
        const expectedAnswer = `\n 0 ano(s) \n 1 mes(es) \n 0 dia(s)`

        expect(parserAge2Days(days)).toEqual(expectedAnswer);
    });
}) 

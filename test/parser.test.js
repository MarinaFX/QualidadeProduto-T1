const parserAge2Days = require('../src/index');

describe('Parser age 2 days', () => {
    test('when days are 400', () => {
        const days = 400;
        const expectedAnswer = `1 ano(s)\n1 mes(es)\n5 dia(s)`

        expect(parserAge2Days(days)).toEqual(expectedAnswer);
    });

    test('when days are 800', () => {
        const days = 800;
        const expectedAnswer = `2 ano(s)\n2 mes(es)\n10 dia(s)`

        expect(parserAge2Days(days)).toEqual(expectedAnswer);
    });

    test('when days are 30', () => {
        const days = 30;
        const expectedAnswer = `0 ano(s)\n1 mes(es)\n0 dia(s)`

        expect(parserAge2Days(days)).toEqual(expectedAnswer);
    });
}) 

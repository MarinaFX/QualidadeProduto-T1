const parserAge2Days = require('../src/index');

describe('Parser parser 2 days', () => {
    test('when days are 400', () => {
        const days = 400;
        const expectedAnswer = `\n 1 ano(s) \n 1 mes(es) \n 5 dia(s)`

        expect(parserAge2Days(days)).toEqual(expectedAnswer);
    });
}) 

const { it } = require('jest-circus')
const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should input a name', () => {
            const text = "Bingo Bongo"
            const obj = Employee().getName(text)

            expect(obj.text).toEqual(text)
        });


        it("should throw an error if not provided a 'text' value", () => {

            const cb = () => new Employee().getName(text);
            const err = new Error(
                "Expected parameter 'text' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        it('Should input an ID number value', () => {
            const text = "123456789"
            const obj = Employee().getId(text)

            expect(obj.text).toEqual(text)
        });

        it("should throw an error if not provided a 'text' value", () => {

            const cb = () => new Employee().getId(text);
            const err = new Error(
                "Expected parameter 'text' to be a non empty string"
            );
            })
    });
});
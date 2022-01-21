const { it } = require('jest-circus')
const Employee = require('../lib/Employee')

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

            expect(cb).toThrowError(err);
        });
        it('Should input an ID value', () => {
            const num = "123456789"
            const obj = Employee().getId(num)

            expect(obj.num).toEqual(num)
        });

        it("should throw an error if not provided a value", () => {

            const cb = () => new Employee().getId(cb);
            const err = new Error(
                "Expected parameter 'text' to be a non empty string"
            );
            expect(cb).toThrowError(err);
        })
        it('Should input an email value', () => {
            const num = "test@gmail.com"
            const obj = Employee().getEmail(email)

            expect(obj.email).toEqual(email)
        });

        it("should throw an error if not provided a value", () => {

            const cb = () => new Employee().getEmail(cb);
            const err = new Error(
                "Expected parameter 'text' to be a non empty string"
            );
            expect(cb).toThrowError(err);
        })
    });
});
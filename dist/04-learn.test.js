"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _04_learn_1 = require("./04-learn");
describe('isPositive()', function () {
    it('should return true when n > 0', function () {
        expect((0, _04_learn_1.isPositive)(1)).toBe(true);
        expect((0, _04_learn_1.isPositive)(2)).toBe(true);
        expect((0, _04_learn_1.isPositive)(3)).toBe(true);
    });
    it('should return true when n =0', function () {
        expect((0, _04_learn_1.isPositive)(0)).toBe(false);
    });
    it('should return true when n<0', function () {
        expect((0, _04_learn_1.isPositive)(-1)).toBe(false);
        expect((0, _04_learn_1.isPositive)(-2)).toBe(false);
        expect((0, _04_learn_1.isPositive)(-4)).toBe(false);
    });
});

"use strict";

var _functions = require("../functions");
var _consts = require("../consts");
describe("functions file tests", function () {
  describe("assertCompatibleSize tests", function () {
    test("function accepts compatible size %s then returns true", function () {
      Object.values(_consts.COUNTDOWN_SIZES).forEach(function (size) {
        expect((0, _functions.assertCompatibleSize)(size, _consts.COUNTDOWN_SIZES)).toBeTruthy();
      });
    });
    test.each([[["a", "b", "c"]], ["nonExistInYourSizeList"], ["#$9GGG9$#"], [23]])("assertCompatibleSize accepts non-compatible size %s then returns false", function (size) {
      expect((0, _functions.assertCompatibleSize)(size, _consts.COUNTDOWN_SIZES)).toBeFalsy();
    });
  });
});
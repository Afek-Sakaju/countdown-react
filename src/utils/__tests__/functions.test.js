import { assertCompatibleSize } from "../functions";
import { COUNTDOWN_SIZES } from "../consts";

describe("functions file tests", () => {
  describe("assertCompatibleSize tests", () => {
    test("function accepts compatible size %s then returns true", () => {
      Object.values(COUNTDOWN_SIZES).forEach((size) => {
        expect(assertCompatibleSize(size, COUNTDOWN_SIZES)).toBeTruthy();
      });
    });

    test.each([
      [["a", "b", "c"]],
      ["nonExistInYourSizeList"],
      ["#$9GGG9$#"],
      [23],
    ])(
      "assertCompatibleSize accepts non-compatible size %s then returns false",
      (size) => {
        expect(assertCompatibleSize(size, COUNTDOWN_SIZES)).toBeFalsy();
      }
    );
  });
});

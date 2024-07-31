import { isDivisibleByThree } from "./isDivisibleByThree";

test("isDivisibleByThree should return true if the number is divisible by 3", () => {
  expect(isDivisibleByThree(1)).toBe(false);
  expect(isDivisibleByThree(2)).toBe(false);
  expect(isDivisibleByThree(3)).toBe(true);
  expect(isDivisibleByThree(6)).toBe(true);
  expect(isDivisibleByThree(9)).toBe(true);
  expect(isDivisibleByThree(12)).toBe(true);
});

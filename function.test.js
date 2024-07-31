import { sayHello, checkNumber, checkSymbol, checkPass } from "./function";

test("Creates a greeting", () => {
  expect(sayHello("Lera", "Jackson")).toBe("Hello, Lera Jackson!");
});

test("Check that the password contains a number", () => {
  expect(checkNumber("some_not_so_strong_pass")).toBe(false);
  expect(checkNumber("stronger_pass_123")).toBe(true);
});

test("Check that the password contains a special character", () => {
  expect(checkSymbol("somePass")).toBe(false);
  expect(checkSymbol("another_pass")).toBe(true);
});

test("Check password", () => {
  expect(checkPass("somePas$")).toBe(false);
  expect(checkPass("another_pass_123")).toBe(true);
});

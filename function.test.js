const sayHello = require("./function");  

test("Creates a greeting", () => {
  expect(sayHello("Lera", "Jackson")).toBe("Hello, Lera Jackson!");
});

import { urlGenerator } from "./urlGenerator.js";
const urlRegEx =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

// Write your code here
test("urlGenerator should return a valid string", () => {
  expect(typeof urlGenerator("řâñđöḿ text")).toBe("string");
  expect(urlGenerator("řâñđöḿ text")).toMatch(urlRegEx);
});
export function sayHello(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
};

// check that the password contains a number
export function checkNumber(pass) {
  if (typeof pass === 'string') {
    let regex = /\d/;
    return regex.test(pass); // the regex.test() method will return true if the passed string matches the regex
    }
}

// check that the password contains a special character
export function checkSymbol(pass) {
  if (typeof pass === 'string') {
    let regex = /[!@#$%^&*(),.?":{}|<>_]/;
    return regex.test(pass);
  }
}

// run both checks
export function checkPass(pass) {
  return checkNumber(pass) && checkSymbol(pass);
}

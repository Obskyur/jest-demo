import { isValidEmail, isValidPassword, validateUserInput } from './index.js';

// We've already added some test data for your convenience, but you can use your own
const dataValid = { email: 'bob@yandex.com', password: '1amAp0k3m0n%'  };
const dataInvalidPassword = { email: 'bob@yandex.com', password: '123456' };
const dataInvalidEmail = { email: 'bob', password: '1amAp0k3m0n%'  };
const dataInvalidCredentials = { email: 'bob', password: '12345'  };

describe('validateUserInput', () => {
  test('should check if the email is valid', () => {
    expect(isValidEmail(dataValid.email)).toBe(true);
    expect(isValidEmail(dataInvalidEmail.email)).toBe(false);
  });
  test('should check if the password is valid', () => {
    expect(isValidPassword(dataValid.password)).toBe(true);
    expect(isValidPassword(dataInvalidPassword.password)).toBe(false);
  });
  test('should return a message if the email and password are valid', () => {
    expect(validateUserInput(dataValid)).toEqual({ isValidated: true, message: 'User created successfully', error: null });
  });
  test('should return an email error message if the email is incorrect', () => {
    expect(validateUserInput(dataInvalidEmail)).toEqual({ isValidated: false, message: null, error: 'Wrong email' });
  });
  test('should return a password error message if the password is incorrect', () => {
    expect(validateUserInput(dataInvalidPassword)).toEqual({ isValidated: false, message: null, error: 'Wrong password' });
  });
  test('should return an incorrect data error if all data is incorrect', () => {
    expect(validateUserInput(dataInvalidCredentials)).toEqual({ isValidated: false, message: null, error: 'Incorrect data' });
  });
})
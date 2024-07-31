import mongoose from 'mongoose';
import User from '../models/user';
import { _user } from '../fixtures/db';

const MONGO_URL = 'mongodb://localhost:27017/aroundtheus';
const { connect, disconnect } = mongoose;

beforeAll(() => {
  return connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
});

afterAll(() => {
  return disconnect();
});

describe('Database tests', () => {
  beforeEach(() => {
    const { name, about, avatar, email, password } = _user;

    return User.create({
      name,
      about,
      avatar,
      email,
      password,
    });
  });

  afterEach(() => User.deleteOne({ email: _user.email }));

  test('The user must be complete', () => {
    return User.findOne({ email: _user.email })
      .then((user) => {
        expect(user).toBeDefined();
        expect(user.email).toBe(_user.email);
        expect(user.name).toBe(_user.name);
      });
  });
});
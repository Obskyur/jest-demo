import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: 'email is required',
    unique: true,
    validate: {
      validator: (v) => isEmail(v),
      message: 'invalid email format',
    },
  },
  password: {
    type: String,
    required: 'password is required',
    select: false,
  },
  name: {
    type: String,
    required: 'name is required',
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: 'about is required',
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator: (v) => isURL(v),
      message: 'avatar must be a URL',
    },
  },
}, { versionKey: false });

export default mongoose.model('user', userSchema);

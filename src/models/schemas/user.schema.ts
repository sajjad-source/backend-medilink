import { Schema } from 'mongoose';

const UserSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ['practitioner', 'receptionist', 'admin']
    }
  },
  { timestamps: true }
);

export default UserSchema;

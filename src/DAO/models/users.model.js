import { Schema, model } from "mongoose";

const userSchema = new Schema({
    first_name: { type: String, required: true, trim: true, maxlength: 100,},
    last_name: { type: String, required: true, trim: true, maxlength: 100,},
    username: {type: String,required: true,unique: true,trim: true,maxlength: 100,},
    email: { type: String, required: true, unique: true, trim: true, maxlength: 100,},
    age: { type: String, required: true, trim: true, maxlength: 100,},
    password: { type: String, required: true, maxlength: 100,},
    role: { type: String, enum: ['admin', 'user'], default: 'user',},
    cart_ID: { type: String, trim:true, unique:true, required: true,},
});

export const UserModel = model("users", userSchema);
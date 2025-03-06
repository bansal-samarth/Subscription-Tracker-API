import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim : true,
        minlength: 3,
        maxlength: 20
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim : true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        select: false
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
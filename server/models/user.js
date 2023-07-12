import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 20,
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 20,
        },
        email: {
            type: String,
            require: true,
            max: 20,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            min: 6,
        },
        friends: {
            type: Array,
            default: [],
        },
        loaction: {
            type: String,
            max: 50,
        },
        bio: {
            type: String,
            max: 80,
        },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("User", UserSchema);
export default User; 
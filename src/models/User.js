const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide your username'],
        trim: true,
        maxlength: [20, 'Username cannot be more than 20 characters']
    },
    password: {
        type: String,
        required: [true, 'Please provide your password'],
        minlength: [6, 'Password cannot be less than 6 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        trim: true,
        maxlength: [50, 'Email cannot be more than 50 characters']
    },
    refreshToken: {
        type: String,
        default: ''
    },
},
    { timestamps: true }
);

// Exclude password and refreshToken fields from all queries by default
userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        delete ret.refreshToken;
        return ret;
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
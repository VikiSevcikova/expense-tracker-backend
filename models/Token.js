const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require("joi");

const TokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: "User"
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,
    },
});

TokenSchema.methods.getResetPasswordToken = () => {
    return crypto.randomBytes(32).toString("hex");
}

TokenSchema.methods.hashResetPasswordToken = (resetToken) => {
    //create hash object with sha256 algorithm, updates it with data in resetToken and return in hex form
    return crypto.createHash("sha256").update(resetToken).digest("hex");
}

const Token = mongoose.model("Token", TokenSchema);

module.exports = Token;
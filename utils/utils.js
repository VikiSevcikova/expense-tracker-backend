const crypto = require("crypto");

exports.getResetPasswordToken = () => {
    return crypto.randomBytes(32).toString("hex");
}

exports.hashResetPasswordToken = (resetToken) => {
    //create hash object with sha256 algorithm, updates it with data in resetToken and return in hex form
    return crypto.createHash("sha256").update(resetToken).digest("hex");
}

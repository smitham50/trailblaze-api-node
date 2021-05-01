const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// hasSecurePassword,
// validatesConfirmation,
// validatesEmailUniqueness,
// validatesUsernameUniqueness,
// hasManyUserTrails, dependent destroy
// hasManyTrails, through userTrails,
// hasManyUserHikes, dependent destroy,
// hasManyHikes, through hasManyUserHikes
// validatesEmailPattern,
// validatesPasswordPattern



const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
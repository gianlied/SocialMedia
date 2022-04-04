const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    team:{
        type: String
    },
    tournamentResults:{
        type: String
    },
    location:{
        type: String
    },
    games:{
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    socialMedia: {
        youtube:{
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
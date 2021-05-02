const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrailSchema = new Schema({
    name: String,
    summary: String,
    difficulty: String,
    stars: Number,
    starVotes: String,
    location: String,
    url: String,
    imgSqSmall: String,
    imgSmall: String,
    imgMedium: String,
    length: Number,
    ascent: Number,
    descent: Number,
    high: Number,
    low: Number,
    longitude: Number,
    latitude: Number,
    conditionStatus: String,
    conditionDetails: String,
    conditionDate: Date
});

module.exports = mongoose.model('Trail', TrailSchema);
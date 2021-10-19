const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    isBand: Boolean,
    desciption: String,

    picture: {
        type: String,
        default: 'https://res.cloudinary.com/gdaconcept/image/upload/v1614550771/workshop-artistify/no-image-logo_dcufai.png'
    }
});

const artistModel = model("artists", artistSchema);
module.exports = artistModel;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diseaseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    goodIngredients: {
        type: [String],   // 👈 ARRAY of ingredients
        required: true
    }
}, { timestamps: true });

const Disease = mongoose.model("Disease", diseaseSchema);
module.exports = Disease;

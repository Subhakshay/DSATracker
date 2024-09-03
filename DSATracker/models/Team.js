const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    problemsSolved: [{ type: String }], // Store problem IDs
});

module.exports = mongoose.model('Team', TeamSchema);

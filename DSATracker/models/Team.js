import mongoose from 'mongoose';

// Define the Team Schema
const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    problemsSolved: [{ type: String }], // Store problem IDs
});

// Create the Team model
const Team = mongoose.model('Team', TeamSchema);

// Export the Team model as default export
export default Team;


// teamController.js
const Team = require('../models/Team');
const User = require('../models/User');

exports.createTeam = async (req, res) => {
    const { name } = req.body;

    try {
        const team = await Team.create({ name, members: [req.user.id] });
        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ message: 'Team creation failed' });
    }
};

exports.joinTeam = async (req, res) => {
    const { teamId } = req.body;

    try {
        const team = await Team.findById(teamId);
        if (!team.members.includes(req.user.id)) {
            team.members.push(req.user.id);
            await team.save();
        }
        res.json(team);
    } catch (error) {
        res.status(400).json({ message: 'Failed to join team' });
    }
};

exports.trackProblem = async (req, res) => {
    const { teamId, problemId } = req.body;

    try {
        const team = await Team.findById(teamId);
        if (!team.problemsSolved.includes(problemId)) {
            team.problemsSolved.push(problemId);
            await team.save();
        }
        res.json(team);
    } catch (error) {
        res.status(400).json({ message: 'Failed to track problem' });
    }
};

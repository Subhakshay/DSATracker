const axios = require('axios');

exports.getProblems = async (req, res) => {
    try {
        const response = await axios.get('https://codeforces.com/api/problemset.problems');
        res.json(response.data.result.problems);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch problems' });
    }
};

exports.getContests = async (req, res) => {
    try {
        const response = await axios.get('https://codeforces.com/api/contest.list');
        res.json(response.data.result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch contests' });
    }
};

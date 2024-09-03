// Importing axios using ES Module syntax
import axios from 'axios';

// Exporting getProblems function
export const getProblems = async (req, res) => {
    try {
        const response = await axios.get('https://codeforces.com/api/problemset.problems');
        res.json(response.data.result.problems);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch problems' });
    }
};

// Exporting getContests function
export const getContests = async (req, res) => {
    try {
        const response = await axios.get('https://codeforces.com/api/contest.list');
        res.json(response.data.result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch contests' });
    }
};


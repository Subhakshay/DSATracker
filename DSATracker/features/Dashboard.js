import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        const fetchProblems = async () => {
            const response = await axios.get('/api/codeforces/problems');
            setProblems(response.data);
        };

        fetchProblems();
    }, []);

    return (
        <div>
            <h1>Your Dashboard</h1>
            <ul>
                {problems.map((problem) => (
                    <li key={problem.contestId}>{problem.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;

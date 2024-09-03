import express from 'express';
import { createTeam, joinTeam, trackProblem } from '../controllers/teamController.js';
const router = express.Router();

router.post('/create', createTeam);
router.post('/join', joinTeam);
router.post('/track', trackProblem);

export default router;

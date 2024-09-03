import express from 'express';
import { getProblems, getContests } from '../controllers/codeforcesController.js';
const router = express.Router();

router.get('/problems', getProblems);
router.get('/contests', getContests);

export default router;


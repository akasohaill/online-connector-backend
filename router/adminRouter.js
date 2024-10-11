import express from 'express';
import { getAllUsers } from '../controller/adminController.js';

const router=express.Router();

router.get('/submission',getAllUsers);

export default router;
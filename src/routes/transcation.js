import { Router } from 'express';
import { addTranscationData } from '../controllers/TransactionController.mjs';

const transcationRouter = Router();

transcationRouter.post('/addTranscation', addTranscationData);

export default transcationRouter;

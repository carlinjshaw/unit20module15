import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';

const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
    // TODO: Get all the Users out of the database and send them to the client as a response
    try {
      // * Get all the User data out of the database, excluding password
   
      // * Send back the User data as a response to the client
      
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
});

export { router as userRouter };

import { Request, Response } from 'express';
import app from '../src/index.js'; // The .js extension is required for ESM!

export default function handler(req: Request, res: Response) {
  return app(req, res);
}
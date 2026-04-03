import { Request, Response } from "express";
import app from "../src/index.js";

export default function handler(req: Request, res: Response) {
  return app(req, res);
}


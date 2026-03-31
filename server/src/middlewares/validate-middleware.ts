import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const ValidateData = (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    return next();
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default ValidateData;

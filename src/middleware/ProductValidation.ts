import { NextFunction, Request, Response } from 'express';

const productValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    if (typeof name !== 'string') {
      return res.status(400).json({ message: '"name" must be a string' });
    }
    return next();
  } catch (err) {
    return res.status(500).end();
  }
};

export = productValidation;
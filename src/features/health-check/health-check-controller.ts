import type { NextFunction, Request, Response } from 'express';

export async function healthCheckHandler(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const body = {
      message: 'OK',
      timestamp: Date.now(),
      uptime: process.uptime(),
    };
    response.json(body);
  } catch (error) {
    next(error);
  }
}

import { NextFunction, Request, Response } from "express";

export function sayWelcome(req: Request, res: Response, next: NextFunction) {
  console.log("welcome");
  next();
}

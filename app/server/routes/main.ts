import { Router, Request, Response } from "express";

export const MainRouter: Router = Router();

MainRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello");
})
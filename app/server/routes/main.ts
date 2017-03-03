import { Router, Request, Response } from "express";

export class MainRouter {

    private router: Router;

    constructor() {
        this.router = Router();
    }
    public main(): Router {
        this.router.get("/", (req: Request, res: Response) => {
            res.send("Hello");
        });
        return this.router;
    }
}
import * as express from "express";
import { MainRouter } from "./routes";
const server: express.Application = express();

export class Server {

    private server: express.Application;
    private port: number;

    constructor(port?: number) {
        this.server = express();
        this.port = port || 3000;
        this.routes();
    }

    private routes(): void {
        const mainRouter: MainRouter = new MainRouter();

        this.server.use("/", mainRouter.main());
    }

    public start(): void {
        this.server.listen(this.port, () => {
            console.log("Server started on port " + this.port);
        })
    }
}  
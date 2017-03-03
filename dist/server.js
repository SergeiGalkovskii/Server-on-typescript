"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
const server = express();
class Server {
    constructor(port) {
        this.server = express();
        this.port = port || 3000;
        this.routes();
    }
    routes() {
        const mainRouter = new routes_1.MainRouter();
        this.server.use("/", mainRouter.main());
    }
    start() {
        this.server.listen(this.port, () => {
            console.log("Server started on port " + this.port);
        });
    }
}
exports.Server = Server;

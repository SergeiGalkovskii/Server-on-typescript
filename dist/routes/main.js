"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MainRouter {
    constructor() {
        this.router = express_1.Router();
    }
    main() {
        this.router.get("/", (req, res) => {
            res.send("Hello");
        });
        return this.router;
    }
}
exports.MainRouter = MainRouter;

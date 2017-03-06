"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.MainRouter = express_1.Router();
exports.MainRouter.get("/", (req, res) => {
    res.send("Hello");
});

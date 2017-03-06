"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
const app = express();
const port = 3000;
app.use("/", routes_1.MainRouter);
app.listen(port, () => {
    console.log("Server started on port " + port);
});

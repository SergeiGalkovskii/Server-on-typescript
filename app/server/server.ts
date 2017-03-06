import * as express from "express";
import { MainRouter } from "./routes";

const app: express.Application = express();
const port: number = 3000;

app.use("/", MainRouter);

app.listen(port, () => {
    console.log("Server started on port " + port);
});

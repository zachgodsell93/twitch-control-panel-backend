import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import { userRouter } from "./routes/UserRoutes";
const cors = require("cors");
dotenv.config();

const app: express.Express = express();
const port: number = Number(process.env.PORT) || 3333;
app.use(helmet());
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

app.get("/health", (req: express.Request, res: express.Response) => {
	res.json({ status: "Healthy :)" });
});

//Routes
app.use("/users", userRouter);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

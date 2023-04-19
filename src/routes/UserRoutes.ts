import express from "express";
import { UserController } from "../controllers/UserController";

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/", async (req: express.Request, res: express.Response) => {
	const users = await userController.getUsers();
	res.json(users);
});

userRouter.get("/:uid", async (req: express.Request, res: express.Response) => {
	const uid = Number(req.params.uid);
	const user = await userController.getUser(uid);
	res.json(user);
});

export { userRouter };

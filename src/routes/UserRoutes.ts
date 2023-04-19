import express from "express";
import { UserController } from "../controllers/UserController";

const userRouter = express.Router();
const userController = new UserController();

// userRouter.get("/", async (req: express.Request, res: express.Response) => {
// 	const users = await userController.getUsers();
// 	res.json(users);
// });

// userRouter.get("/:uid", async (req: express.Request, res: express.Response) => {
// 	const uid = Number(req.params.uid);
// 	const user = await userController.getUser(uid);
// 	res.json(user);
// });

userRouter.post(
	"/create_user",
	async (req: express.Request, res: express.Response) => {
		const user = await userController.createUser(req.body);
		console.log(user);
		res.json({ status: 201, message: "User Created" });
	}
);

userRouter.post(
	"/update_user/:uid",
	async (req: express.Request, res: express.Response) => {
		console.log(req.body);
		const user = await userController.createUser(req.body);
		res.json({ status: 201, message: "User Created" });
	}
);

export { userRouter };

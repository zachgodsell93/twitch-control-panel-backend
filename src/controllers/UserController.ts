import { User } from "../models/User";

export class UserController {
	constructor() {}

	async getUsers(): Promise<User[]> {
		return [];
	}

	async getUser(uid: number): Promise<User> {
		return { uid: 0, email: "", twitchBroadCasterId: 0 };
	}
}

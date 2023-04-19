import { db } from "../utils/firebase.config";
import express from "express";
import axios from "axios";

export class TwitchController {
  constructor() {}

  async getBroadCasterId(req: express.Request, res: express.Response) {
    const { twitchAccessToken } = req.body;
    let config = {
      method: "GET",
      headers: {},
      url: "https://api.twitch.tv/helix/users",
    };
  }

  // async createUser(user: User): Promise<createUser> {
  // 	try {
  // 		console.log(user);
  // 		const { uid, email, twitchBroadCasterId } = user;

  // 		const userRef = this.db.collection("users").doc(uid.toString());
  // 		await userRef.set({
  // 			email: email,
  // 			twitchBroadCasterId: twitchBroadCasterId,
  // 		});

  // 		return { status: 201, message: "User Created" };
  // 	} catch (error) {
  // 		console.log(error);
  // 		return { status: 500, message: "Error Creating User" };
  // 	}
  // }
}

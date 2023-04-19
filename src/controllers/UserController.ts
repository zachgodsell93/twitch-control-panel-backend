import { User } from "../models/User";
import { db } from "../utils/firebase.config";
import express from "express";

interface createUser {
	status: number;
	message: string;
}
export class UserController {
	private db: FirebaseFirestore.Firestore;

	constructor() {
		this.db = db;
	}

	async createUser(user: User): Promise<createUser> {
		try {
			const { uid, email, twitchBroadcasterId } = user;
			console.log(uid);
			console.log(email);
			console.log(twitchBroadcasterId);
			const userRef = this.db.collection("users").doc(uid);
			await userRef.set({
				uid: uid,
				email: email,
				twitchBroadCasterId: twitchBroadcasterId,
			});

			return { status: 201, message: "User Created" };
		} catch (error) {
			console.log(error);
			return { status: 500, message: "Error Creating User" };
		}
	}

	async updateUser(uid: string, user: User): Promise<createUser> {
		try {
			const { uid, email, twitchBroadcasterId } = user;

			const userRef = this.db.collection("users").doc(uid);
			await userRef.set(
				{
					uid: uid,
					email: email,
					twitchBroadCasterId: twitchBroadcasterId,
				},
				{ merge: true }
			);

			return { status: 201, message: "User Created" };
		} catch (error) {
			console.log(error);
			return { status: 500, message: "Error Creating User" };
		}
	}
}

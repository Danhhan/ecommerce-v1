"use strict";

const mongoose = require("mongoose");

const connectString = `mongodb://localhost:2717/shopDev`;
const { countConnect } = require("../helpers/check.connect");

class Database {
	constructor() {
		this.connect();
	}
	connect(type = "mongodb") {
		if (1 === 1) {
			mongoose.set("debug", true);
			mongoose.set("debug", { color: true });
		}
		mongoose
			.connect(connectString)
			.then((_) => {
				console.log("Connected Mongodb Success");
				// countConnect();
			})
			.catch((error) => console.log(`Error Connect ${error}`));
	}
	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;

"use strict";

const dev = {
	app: {
		port: process.env.DEV_APP_PORT || '4000',
	},
	db: {
		host: process.env.DEV_DB_HOST || "localhost",
		port: process.env.DEV_DB_PORT || 2717,
		name: process.env.DEV_DB_NAME || "shopDEV",
	},
};
const pro = {
	app: {
		port: 4000,
	},
	db: {
		host: "localhost",
		port: 2717,
		name: "db",
	},
};

const config = {dev, pro}
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env];

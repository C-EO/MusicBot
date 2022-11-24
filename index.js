//JotaroKujo0525 note, this is a deed that i should've done a long time ago
require('dotenv').config()

const MusicBot = require("./lib/MusicBot");
const { exec } = require("child_process");

if (process.env.REPL_ID) {
	console.log("Replit system detected, initiating special `unhandledRejection` event listener.")
	process.on('unhandledRejection', (reason, promise) => {
		promise.catch((err) => {
			if (err.status === 429) {
				console.log("Something went wrong whilst trying to connect to the Discord Gateway, resetting...");
				exec("kill 1");
			}
		});
	});
}

const client = new MusicBot();

console.log("Make sure to fill in the config.js before starting the bot.");

module.exports = client;

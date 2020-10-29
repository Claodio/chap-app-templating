require = require("esm")(module);
module.exports = require("./web.server");
const __goTo = require('./paths');

const pathTo ={}
console.log(__goTo({production_path:''}));

// console.log(arr.development_path)

import {
	WebServer,
	start,
	setWebServerName,
	portServerIsOn,
	ServerRunOnIP,
	siteTitle
} from "./web.server";

let webServer = new WebServer("development", 8000, 3000, 3001, "ejs", "server", "client", "test");
start(webServer)
	.then(() => {
		console.log(`"started the" ${setWebServerName(webServer)}\nhttp://${ServerRunOnIP()}:${portServerIsOn(webServer)}`);
	})
	.catch(err => {
		console.error(err);
		console.error(`"Failed to start the" ${setWebServerName(webServer)}`);
	});

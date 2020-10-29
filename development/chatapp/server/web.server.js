import {__dirs,__paths,__network } from "./path_directories";
import {start_appRoute} from "./route";
const _dev_IP_address=__network.ip_address;
const _appDir=__dirs.framework;
const _dev=__dirs.development;

const express = require("express");
const reload = require("reload");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const browserSync = require("browser-sync");
const io = require("socket.io")();
const openBrowser = require("open");
const morgan = require('morgan');
const cors = require('cors');

const WebServer = /** @class */ (function () {
	function WebServer (Name, ServerPort, BsPort, BsUiPort, Engine, ServerDir, ClientDir, TestDir) {
		this.Name = Name;
		this.ServerPort = ServerPort;
		this.BsPort = BsPort;
		this.BsUiPort = BsUiPort;
		this.Engine = Engine;
		this.ServerDir = ServerDir;
		this.ClientDir = ClientDir;
		this.TestDir = TestDir;
	}
	return WebServer;
}());

function start (WebServer) {
	return new Promise(function (resolve, reject) {
		const config = {
			files: [path.join(__dirname, "../../") + "/**/*.{js,css,scss,ts,html}", path.join(__dirname, "../../") + "/**/**/*.{js,css,scss,ts,html}"],
			logLevel: "debug",
			logSnippet: false,
			reloadDelay: 3000,
			reloadOnRestart: false,
			port: WebServer.BsPort,
			ui: {
				port: WebServer.BsUiPort
			}
		};
		const bs = browserSync.create(WebServer.Name).init(config);
		app.set("port", process.env.PORT || WebServer.ServerPort);
		app.set("view engine", WebServer.Engine);
		app.set("clientDirectory", path.join(`${__dirname},/${WebServer.Name}/${_appDir}/${WebServer.ClientDir}`));
		app.set("serverDirectory", path.join(`${__dirname},/${WebServer.Name}/${_appDir}/${WebServer.ServerDir}`));
		app.set("testDirectory", path.join(`${__dirname},/${WebServer.Name}/${_appDir}/${WebServer.TestDir}`));
		app.use(express.static(`${WebServer.Name}/${_appDir}/${WebServer.ClientDir}`, {
			index: false,
    		immutable: true,
    		cacheControl: true,
    		maxAge: "30d"
		}));
		app.use(express.static(`${WebServer.Name}/${_appDir}/${WebServer.ClientDir}/css`));
		app.use(express.static(`${WebServer.Name}/${_appDir}/${WebServer.ClientDir}/js`));
		app.use(express.static(`${WebServer.Name}/${_appDir}/${WebServer.ClientDir}/html`));
		app.locals.siteTitle = `${_appDir} Template`;
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.json());

		// app.use(express.urlencoded({extended:true}));
		// app.use(express.json());

		app.use(cors());
		app.use(morgan(_dev));
		app.use('/',start_appRoute);

		try {
			const server = app.listen(`${app.get("port")}`, app.use(require("connect-browser-sync")(bs)), function () {
				console.log(`Start the ${WebServer.Name} server on\n[IP] -> ${_dev_IP_address}\n[Port] ->${WebServer.ServerPort}`); // ${app.get("port")}
				openBrowser(`http://${_dev_IP_address}:${WebServer.ServerPort}`); 
			});
			io.attach(server);
			io.on("connection", function (socket) {});
			resolve();
		} catch (e) {
			console.error(e);
			reject(e);
		}
		// reload(server, app);
	});
}

function portServerIsOn (WebServer) {
	return  app.get("port") || WebServer.serverPort;
}

function setWebServerName (WebServer) {
	return _dev || WebServer.Name;
}
function ServerRunOnIP () {
	return _dev_IP_address;
}
function siteTitle(){
	app.locals.siteTitle = `${_appDir} Template`;
	return app.locals.siteTitle
}
export {WebServer, portServerIsOn, start, setWebServerName,ServerRunOnIP,siteTitle};

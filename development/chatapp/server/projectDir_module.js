import {__dirs, __paths,__network} from "./path_directories";
import {use, Create_folder_at_location} from "./projectPaths";


let SYS_ENV_VARIABLES = {
	USER_PROFILE: process.env["USERPROFILE"],
	DEVICE_NAME: process.env["COMPUTERNAME"],
	USERNAME: process.env["USERNAME"],
	HOME_DRIVE: process.env["SystemDrive"],
	HOME_PATH: process.env["HOMEPATH"],
	OS: process.env["OS"],
	DATE: process.env["DATE"],
	HOME: process.env["HOME"],
	LOGONSERVER: process.env["LOGONSERVER"],
	USERDOMAIN: process.env["USERDOMAIN"],
	USERDNSDOMAIN: process.env["USERDNSDOMAIN"],
	ONE_DRIVE: process.env["ONEDRIVE"]
	// %SystemDrive%\
	// %windir%\
};

var networking={
	IP_address:`${__network.IP_ADDRESS}`,
	subnet:`${__network.SUBNET_MASK}`
}

let devIP_address=networking.IP_address;
let devSubnet=networking.subnet;

let main_dir_path = `${__paths.main_dir_path}`;
let development_path = `${__paths.development_path}`;
let production_path = `${__paths.production_path}`;
let bower_components_path = `${__paths.bower_components_path}`;
let node_modules_path = `${__paths.node_modules_path}`;
let project_name_path = `${__paths.project_name_path}`;
let app_name_path = `${__paths.app_name_path}`;
let client_path= `${__paths.client_path}`;
// 
// 
var development = {
	// projectDir: use(development_path __dirs.project_name);
	devDir: use(development_path, `${__dirs.development}`),
	appDir: use(development_path, `${__dirs.app_name}`),
	clienDir: use(app_name_path, `${__dirs.client}`),
	serverDir: use(app_name_path, `${__dirs.server}`),
	testDir: use(app_name_path, `${__dirs.test}`),
	jsDir: use(client_path, `${__dirs.js}`),
	componentDir:use(js_path, `${__dirs.components}`),
	directiveDir:use(js_path, `${__dirs.directives}`),
	moduleDir:use(js_path, `${__dirs.modules}`),
	htmlDir: use(client_path, `${__dirs.html}`),
	styleDir: use(client_path, `${__dirs.styles}`),
	bundleDir: use(client_path, `${__dirs.bundles}`)
	
}

let devFolder=development.devDir;
let dev_appFolder=development.appDir;
let dev_clientFolder=development.clienDir;
let dev_serverDir=development.serverDir;
let dev_testDir=development.testDir;
let dev_jsDir=development.jsDir;
let dev_componentDir=development.componentDir;
let dev_directiveDir=development.directiveDir;
let dev_moduleDir=development.moduleDir;
let dev_htmlDir=development.htmlDir;
let dev_styleDir=development.styleDir;
let dev_bundleDir=development.bundleDir;



var production = {
	prodDir: use(__paths.production_path, __dirs.production),
	app_name: use(__paths.production_path, __dirs.app_name)
}

export {
	main_dir_path,
	project_name_path,
	development_path,
	production_path,
	bower_components_path,
	node_modules_path,
	devIP_address,
	devSubnet,
	devFolder,
	dev_appFolder,
	dev_clientFolder,
	dev_serverDir,
	dev_testDir,
	dev_jsDir,
	dev_componentDir,
	dev_directiveDir,
	dev_moduleDir,
	dev_htmlDir,
	dev_styleDir,
	dev_bundleDir

}


	
// Directories (main_dir,   app_name, client, js, components, directives, modules, html, layouts, markups, markup_components, bundles, styles,css, scss, postcss, server, test)

// [{
// 	"MAIN_PROJECT_DIRECTORY": "JavaScript",
// 	"PROJECT_NAME": "ReactApp_Sat-28-12-2019",
// 	"DEVELOPMENT": {
// 		"development": "development",
// 		"development_sub_folders": {
// 			"ReactApp": "ReactApp",
// 			"ReactApp_sub_folders": {
// 				"client": "client",
// 				"client_sub_folders": {
// 					"js": "js",
// 					"js_sub_folders": {
// 						"components": "components",
// 						"directives": "directives",
// 						"modules": "modules"
// 					},
// 					"html": "html",
// 					"html_sub_folders": {
// 						"layouts": "layouts",
// 						"markups": "markups",
// 						"markup_components": "markup_components"
// 					},
// 					"styles": "styles",
// 					"style_sub_folders": {
// 						"css": "css",
// 						"scss": "scss",
// 						"less": "less",
// 						"stylus": "stylus",
// 						"postcss": "postcss"
// 					},
// 					"bundles": "bundles"
// 				},
// 				"server": "server",
// 				"test": "test"
// 			}
// 		}
// 	},
// 	"PRODUCTION": "production",
// 	"THEME_NAME": "ReactApp_Sat-28-12-2019",
// 	"BOWER_COMPONENTS": "bower_components",
// 	"NODE_MODULES": "node_modules",
// 	"IP_ADDRESS": "172.25.48.1",
// 	"SUBNET_MASK": "255.255.240.0"
// }]
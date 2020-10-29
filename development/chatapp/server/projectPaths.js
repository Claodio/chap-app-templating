"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var grunt = require("grunt");
var gulp = require("gulp");
var jsonFiles = [];

var Directories = /** @class */ (function () {
	function Directories (main_dir, project_name, development, production, bower_components, node_modules, app_name, client, js, components, directives, modules, html, layouts, markups, markup_components, bundles, styles,css,scss, postcss, server, test) {
		this.main_dir = main_dir;
		this.project_name = project_name;
		this.development = development;
		this.production = production;
		this.bower_components = bower_components;
		this.node_modules = node_modules;
		this.app_name = app_name;
		this.client = client;
		this.js = js;
		this.components = components;
		this.directives = directives;
		this.modules = modules;
		this.html = html;
		this.layouts = layouts;
		this.markups = markups;
		this.markup_components = markup_components;
		this.bundles = bundles;
		this.styles=styles;
		this.css = css;
		this.scss = scss;
		this.postcss = postcss;
		this.server = server;
		this.test = test;
		this.dir_name = function (folder_name) {
			return folder_name;
		};
	}
	return Directories;
}());

var Paths = /** @class */ (function () {
	function Paths (main_dir_path, project_name_path, development_path, production_path, bower_components_path, node_modules_path, app_name_path, client_path, js_path, components_path, directives_path, modules_path, html_path, layouts_path, markups_path, markup_components_path, bundles_path, styles_path,css_path,scss_path, postcss_path, server_path, test_path) {
		this.main_dir_path = main_dir_path;
		this.project_name_path = project_name_path;
		this.development_path = development_path;
		this.production_path = production_path;
		this.bower_components_path = bower_components_path;
		this.node_modules_path = node_modules_path;
		this.app_name_path = app_name_path;
		this.client_path = client_path;
		this.js_path = js_path;
		this.components_path = components_path;
		this.directives_path = directives_path;
		this.modules_path = modules_path;
		this.html_path = html_path;
		this.layouts_path = layouts_path;
		this.markups_path = markups_path;
		this.markup_components_path = markup_components_path;
		this.bundles_path = bundles_path;
		this.styles_path=styles_path;
		this.css_path = css_path;
		this.scss_path = scss_path;
		this.postcss_path = postcss_path;
		this.server_path = server_path;
		this.test_path = test_path;
		this.dir_path = function (path_name) {
			return path_name;
		};
	}
	return Paths;
}());
// exports.Paths = Paths;
function _dir (_dir) {
	return _dir;
}
// exports._dir = _dir;
function _path (_path) {
	return _path;
}
// exports._path = _path;
var use = function (Paths, Directories) {
	// var this.Directories = _dir(Directories);
	// var this.Paths = _path(Paths);
	// var aPath = folder_path + "." + pathName;
	// var aDir = folder + "." + dirName;
	return `${_path(Paths)}\\${_dir(Directories)}`;
};
// exports.use = use;

var filesrc = function (dir, filename) {
	return `${_path(dir)}\\${_dir(filename)}`;
};
// exports.filesrc = filesrc;


let Create_folder_at_location = function (__path, __folder_name) {
	// let __path= path.resolve(__dirname, "./"+DEVELOPMENT);
	fs.mkdir(use(__path, __folder_name), { recursive: true }, function (err) {
		if (err) {
			throw err;
		}
		console.log(`This folder " ${__folder_name} " is now being created on this path: ${__path}\\${__folder_name}`);
	});
};

// exports.Create_folder_at_location = Create_folder_at_location;

export {
	Directories,
	Paths,
	use,
	_dir,
	_path,
	filesrc,
	Create_folder_at_location
};
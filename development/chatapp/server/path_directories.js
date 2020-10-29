import {
	JavaScript,
	projectName,
	development,
	production,
	bower_components,
	node_modules,
	framework,
	client,
	js,
	components,
	directives,
	modules,
	styles,
	css,
	scss,
	less,
	stylus,
	postcss,
	html,
	layouts,
	markups,
	markup_components,
	bundles,
	server,
	test,
	ip_address,
	subnet_mask
} from "./projectDirectories";
// let data =projectDirectories
console.log(development)

import {
	Directories,
	Paths,
	_dir,
	_path,
	use,
	Create_folder_at_location
} from "./projectPaths";
import path from "path";

let __network ={
	ip_address,
	subnet_mask
}
// exports.__network = __network;

let __dirs = {
	JavaScript,
	projectName,
	development,
	production,
	bower_components,
	node_modules,
	framework,
	client,
	js,
	components,
	directives,
	modules,
	styles,
	css,
	scss,
	less,
	stylus,
	postcss,
	html,
	layouts,
	markups,
	markup_components,
	bundles,
	server,
	test

};
// exports.__dirs = __dirs;

let __paths = new Paths(
	// use(projectDirectories_path, projectDirectories.development, projectDirectories, projectDirectories.development),
	// projectDirectories.development,
	path.join(`${process.cwd()}\\${JavaScript}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${production}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${bower_components}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${node_modules}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${js}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${js}\\${components}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${js}\\${directives}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${js}\\${modules}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${styles}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${styles}\\${css}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${styles}\\${scss}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${styles}\\${less}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${styles}\\${stylus}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${styles}\\${postcss}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${html}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${html}\\${layouts}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${html}\\${markups}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${html}\\${markup_components}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${client}\\${html}\\${bundles}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${server}`),
	path.join(`${process.cwd()}\\${JavaScript}\\${projectName}\\${development}\\${framework}\\${test}`)
); //  "

// exports.__paths = __paths;

export {
	__dirs,
	__paths,
	__network
};

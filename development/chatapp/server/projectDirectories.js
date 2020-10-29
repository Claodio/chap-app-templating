const projectDirectories = '{"MAIN_PROJECT_DIRECTORY":"JavaScript","PROJECT_NAME":"AnAppReact_Mon-13-04-2020","DEVELOPMENT":{"development":"development","development_sub_folders":{"FRAMEWORK":"chatapp","FRAMEWORK_sub_folders":{"client":"client","client_sub_folders":{"js":"js","js_sub_folders":{"components":"components","directives":"directives","modules":"modules"},"html":"html","html_sub_folders":{"layouts":"layouts","markups":"markups","markup_components":"markup_components"},"styles":"styles","style_sub_folders":{"css":"css","scss":"scss","less":"less","stylus":"stylus","postcss":"postcss"},"bundles":"bundles"},"server":"server","test":"test"}}},"PRODUCTION":"production","THEME_NAME":"AnAppReact_Mon-13-04-2020","BOWER_COMPONENTS":"bower_components","NODE_MODULES":"node_modules","IP_ADDRESS":"127.0.0.1","SUBNET_MASK":"255.255.240.0"}';
const FolderName = JSON.parse(projectDirectories);

const JavaScript= FolderName.MAIN_PROJECT_DIRECTORY;
const projectName= FolderName.PROJECT_NAME;
const development= FolderName.DEVELOPMENT.development;
const production=  FolderName.PRODUCTION;
const bower_components= FolderName.BOWER_COMPONENTS;
const node_modules= FolderName.NODE_MODULES;
const framework= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK;
// const  FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders,
const client= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client;
// const  FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders,
const js= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.js;


const ip_address= FolderName.IP_ADDRESS;
const subnet_mask= FolderName.SUBNET_MASK;

	// FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.js_sub_folders,
const components= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.js_sub_folders.components;
const directives= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.js_sub_folders.directives;
const modules= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.js_sub_folders.modules;
const styles= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.styles;
const css= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.style_sub_folders.css;
const scss= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.style_sub_folders.scss;
const less= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.style_sub_folders.less;
const stylus= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.style_sub_folders.stylus;
const postcss= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.style_sub_folders.postcss;
const html= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.html;
const layouts= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.html_sub_folders.layouts;
const markups= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.html_sub_folders.markups;
const markup_components= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.html_sub_folders.markup_components;
const bundles= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.client_sub_folders.bundles;
const server= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.server;
const test= FolderName.DEVELOPMENT.development_sub_folders.FRAMEWORK_sub_folders.Tes;

export {
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
}
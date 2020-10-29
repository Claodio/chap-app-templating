// module.exports = require("./projectDirectories");
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
import path from "path";

const rootDir = function(newDirName){
	return path.join(`${process.cwd()}\\${newDirName}`)
}

const env={
	devDir:development,
  	proDir:production
}


const __goTo = ({
	defaultEnv= env.devDir,
  	env_path=defaultEnv ? rootDir(env.devDir) : rootDir(env.proDir),
  	development_path=env_path,
  	production_path=env_path,
	projectName_path=`${env_path}\\${projectName}`,
	client_path=`${env_path}\\${projectName}\\${client}`,
	
	// bower_components_path=	bower_components,
	// node_modules_path=	node_modules,
	// framework_path=	framework,
	// client_path=	client,
	// js_path=	js,
	// components_path=	components,
	// directives_path=	directives,
	// modules_path=	modules,
	// styles_path=	styles,
	// css_path=	css,
	// scss_path=	scss,
	// less_path=	less,
	// stylus_path=	stylus,
	// postcss_path=	postcss,
	// html_path=	html,
	// layouts_path=	layouts,
	// markups_path=	markups,
	// markup_components_path=	markup_components,
	// bundles_path=	bundles,
	// server_path=	server,
	// test_path=	test,
	// ip_address_path=	ip_address,
	// subnet_mask_path=	subnet_mask
}) => {
  return {
    development_path,
    production_path,
    projectName_path,
    client_path,
  };
};

module.exports = __goTo;
// export{__goTo};
// 
// development                                                                                                 
// {                                                                                                           
//   development_path: 'C:\\Users\\Admin\\Desktop\\project\\chatapp\\development',                             
//   production_path: '',                                                                                      
//   projectName_path: 'C:\\Users\\Admin\\Desktop\\project\\chatapp\\development\\AnAppReact_Mon-13-04-2020',  
//   client_path: 'C:\\Users\\Admin\\Desktop\\project\\chatapp\\development\\AnAppReact_Mon-13-04-2020\\client'
// }                                                                                                           
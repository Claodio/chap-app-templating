import {siteTitle} from "../server/web.server";
const start_appController={
	getAll:(req, res, next)=>{
		return res
		.status(200)
		.json({success:true, message:`Working on:${siteTitle()}`})
	},
	getById: (req, res, next)=>{
		const {id} =req.params
		return res
		.status(200)
		.json({success:true, message:`Working on:${siteTitle()} ${id}`})
	},
	createUser:(req, res, next)=>{
		const {firstName,lastName,id}= req.body;
		const userData={
			id,
			firstName,
			lastName
		}
		return res
		.status(200)
		.json({
			success:true,
			message:`Working on:${id}`,
			data: userData
		})
	}
}

export{start_appController}
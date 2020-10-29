const start_appController={
	getAll:(req, res, next)=>{
		return res
		.status(200)
		.json({success:true, message:`Working Fine`})
	},
	getById: (req, res, next)=>{
		const {id} =req.params
		return res
		.status(200)
		.json({success:true, message:`Working on:${id}`})
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

module.exports=start_appController
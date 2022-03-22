import mongoose from "mongoose";

const Password = new mongoose.Schema({
	login: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	resource: {
		type: String,
		required: true,
	},
	group_ids: {
		type: Array,
		required: true
	}
})

export default mongoose.model('Password', Password)
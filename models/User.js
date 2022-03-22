import mongoose from "mongoose";

const User = new mongoose.Schema({
	login: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	group_ids: {
		type: Array,
		required: true
	}
})

export default mongoose.model('User', User)
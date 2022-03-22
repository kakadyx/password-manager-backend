import mongoose from "mongoose";

const Group = new mongoose.Schema({
	group_name: {
		type: String,
		required: true
	},
	children: {
		type: Array,
		required: false
	}
})

export default mongoose.model('Group', Group)
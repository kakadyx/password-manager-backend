import Group from "../models/Group.js"
import GroupService from '../services/GroupService.js'

class GroupController {

	async create(req, res) {
		try {
			const group = await GroupService.create(req.body)

			res.json(group)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}

	async getAll(req, res) {
		try {
			const groups = await Group.find()
			return res.json(groups)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}

	async getOne(req, res) {
		try {
			const group = await GroupService.getOne(req.params.id)
			return res.json(group)
		} catch (e) {
			res.status(500).json(e.message)
		}

	}



	async update(req, res) {
		try {
			const updatedGroup = await GroupService.update(req.body)
			return res.json(updatedGroup)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}

	async delete(req, res) {
		try {
			const group = await GroupService.delete(req.params.id)
			return res.json(group)
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

export default new GroupController()
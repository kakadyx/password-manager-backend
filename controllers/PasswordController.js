import Password from "../models/Password.js"
import PasswordService from '../services/PasswordService.js'

class PasswordController {

	async create(req, res) {
		try {
			const password = await PasswordService.create(req.body)

			res.json(password)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}

	async getAll(req, res) {
		try {
			const passwords = await Password.find()
			return res.json(passwords)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}

	async getOne(req, res) {
		try {
			const password = await PasswordService.getOne(req.params.id)
			return res.json(password)
		} catch (e) {
			res.status(500).json(e.message)
		}

	}



	async update(req, res) {
		try {
			const updatedPassword = await PasswordService.update(req.body)
			return res.json(updatedPassword)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}

	async delete(req, res) {
		try {
			const password = await PasswordService.delete(req.params.id)
			return res.json(password)
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

export default new PasswordController()
import Password from "../models/Password.js"

class PasswordService {

	async create(password) {
		const createdPassword = await Password.create(password)
		return createdPassword
	}

	async getAll() {
		const passwords = await Password.find()
		return passwords
	}

	async getOne(id) {
		if (!id)
			throw new Error('id is not defined')

		const password = await Password.findById(id)
		return password
	}

	async update(password) {
		if (!password._id)
			throw new Error('id is not defined')

		const updatedPassword = await Password.findByIdAndUpdate(password._id, password, {
			new: true
		})
		return updatedPassword
	}

	async delete(id) {
		if (!id)
			throw new Error('id is not defined')

		const password = await Password.findByIdAndDelete(id)
		return password
	}
}


export default new PasswordService
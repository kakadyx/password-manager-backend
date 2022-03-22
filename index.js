import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js'
import groupRouter from './routers/groupRouter.js'
import passwordRouter from './routers/passwordRouter.js'

const PORT = 3232
const DB_URL = ''

const server = express()

server.use(express.json())

server.use('/api', userRouter)
server.use('/api', groupRouter)
server.use('/api', passwordRouter)


async function startApp() {
	try {
		await mongoose.connect(DB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		})
		server.listen(PORT, () => console.log('SERVER RUNNING ON PORT' + PORT))

	} catch (e) {
		console.log(e)
	}
}

startApp()

console.log("SERVER IS RUNNING")
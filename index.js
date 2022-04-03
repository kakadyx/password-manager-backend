import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js'
import groupRouter from './routers/groupRouter.js'
import passwordRouter from './routers/passwordRouter.js'
import cors from 'cors'

const PORT = 4444
const DB_URL = `mongodb+srv://admin:admin@cluster0.2miju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const server = express()
server.use(cors())
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
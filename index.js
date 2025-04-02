import express from 'express'
import connectDB from './config/db.js'
import userRouter from './routes/user.route.js'
const app = express()
app.use(express.json())
connectDB()

app.get('/', (req, res) => {
    res.json({"message" : "connect successfully"})
})

app.use('/api/user', userRouter)

app.listen(3007, () => {
    console.log('http://127.0.0.1:3007')
})
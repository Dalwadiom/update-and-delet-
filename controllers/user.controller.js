import User from "../models/user.model.js";

const postUser = async (req, res) => {
    try {
        const data = req.body
        const username = data.username
        const isExists = await User.findOne({ username })
        if (isExists) {
            return res.status(400).json({ message: "Username already exists." })
        }
        await User.create(data)
        return res.status(201).json({ "message": "creat user successfully", data })
    } catch (error) {
        console.log("post user error", error)
        return res.status(400).json({ "message": "error post user" })
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ "message": "get users successfully", users })
    } catch (error) {
        console.log(error, "get user error")
        return res.status(400).json({ "message": "get user error" })
    }
}



export { postUser, getUser}

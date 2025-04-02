import Emp from "../models/employee.model.js"

const PostEmp = async (req,res) =>{
try {
    const data = req.body
    await Emp.create(data)
    return res.status(201).json({ "message": "creat user successfully", data })
    
} catch (error) {
    console.log("Post employee Erro",error)
    return res.status(400).json({ "message": "error post user" })
}


}

const GetEmp = async (req, res) => {
    try {
        const emp = await Emp.find()
        return res.status(200).json({ "message": "get users successfully", emp })
    } catch (error) {
        console.log(error, "get user error")
        return res.status(400).json({ "message": "get user error" })
    }
}

const updateEmp = async (req, res) => {
    try {
        const {id} = req.params
        const data = req.body

        const emp = await Emp.findByIdAndUpdate(id, data, {new: true})
        return res.status(200).json({"message" : "success", emp})
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message" : "server error", error})
    }
}

const deleteEmp = async (req, res) => {
    try {
        const {id} = req.params
        await Emp.findByIdAndDelete(id)
        return res.status(200).json({"message" : "delete successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message" : "server error"})
    }
}

export {PostEmp,GetEmp, updateEmp, deleteEmp}

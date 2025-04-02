import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type: String,
        require: true
    },
    email : {
        type : String,
        required : true
    },
    mobileno : {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        type : Number,
        require : true
    },
    experience :{
        type : Number,
        required : true
    },
    salary : {
        type : Number,
        require : true
    }
}, {timestamps : true})

const Emp = mongoose.model('Emp', userSchema);
export default Emp;
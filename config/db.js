import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/demo1")
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Mongodb connection error", error)
    }
}

export default connectDB;
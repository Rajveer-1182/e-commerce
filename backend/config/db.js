import mongoose  from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
            console.log("database connected");    
        })
    } catch (error) {
        console.log(error);     
    }
}

export default connectDB;
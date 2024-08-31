import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
});
const MongoUrl = "mongodb+srv://dhruvdev:dhruv123@atlascluster.osd7kat.mongodb.net"

const connectDB = async () => {
    try{
//        console.log(process.env.MONGOURL);
        const conn = await mongoose.connect(`${MongoUrl}/${DB_NAME}`)
        console.log(`MongoDB connected: ${conn.connection.host}`);

    }catch(error){
        console.error(error);
        process.exit(1);
    }
}

export  {connectDB};
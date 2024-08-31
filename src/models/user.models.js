import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },  
    password : {
        type: String,
        required: true

    },
    name : {
        type: String,
        required: true
    },
    avater : {
        type: String,
        default: "https://www.gravatar.com/avatar/  "
    },
    coverimage : {
        type: String,
        default: "https://www.gravatar.com/avatar/  "
    },
    WatchHistory : [{
        type: Schema.Types.ObjectId,
        ref: "Video",
        

    }],
    refreshToken : {
        type: String,
        
    }




});

export const user = mongoose.model("user", userSchema);
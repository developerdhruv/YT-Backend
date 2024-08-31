import mongoose, {Schema} from "mongoose";


const likeSchema = new Schema({
    videoId : {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true
    },
    userId : {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

export const likeschema = mongoose.model("likeSchema", likeSchema);
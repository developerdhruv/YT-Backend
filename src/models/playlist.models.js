import mongoose, {Schema} from "mongoose";


const playlistSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    videos : [{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }],
    description : {
        type: String,
        required: true
    }


})

export const playlist = mongoose.model("playlist", playlistSchema);
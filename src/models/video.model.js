import mongoose, {Schema} from "mongoose";

import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    VideoFile: {
        type: String,
        required: true
    },
    thumbnail : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    views : {
        type: Number,
        default: 0
    },
    duration : {
        type: String,
        required: true
    },
    isPublic : {
        type: Boolean,
        default: true
    },
})
videoSchema.plugin(mongooseaggregatepaginate);



export const Video = mongoose.model("Video", videoSchema);
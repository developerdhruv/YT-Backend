import mongoose, {Schema} from "mongoose";
import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2";
const commentSchema = new Schema({
    videoId : {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true
    },
    userId : {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    comment : {
        type: String,
        required: true
    }
})
commentSchema.plugin(mongooseaggregatepaginate);

export const comment = mongoose.model("comment", commentSchema);
import mongoose, {Schema} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const videoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        videoUrl: {
            type: String,  //cloudinary url 
            required: true
        },
        thumbnailUrl: {
            type: String,  //cloudinary url 
            required: true
        },
        viewsCount: {
            type: Number,
            default: 0
        },
        likesCount: {
            type: Number,
            default: 0
        },
        dislikesCount: {
            type: Number,
            default: 0
        },
        commentsCount: {
            type: Number,
            default: 0
        },
        uploaderId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        tags: [
            {
                type: String,
                trim: true
            }
        ],
    },
    {
        timestamps: true,
    }
);

videoSchema.plugin(mongoosePaginate);
export const Video = mongoose.model("Video", videoSchema);
import { model, Schema } from "mongoose"

const blogSchema = new Schema(
    {
        title: {type: String, required: true},
        slug: { type: String, required: true, unique: true},
        description: { type: String, required: true},
        content: { type: String, required: true},
        image: {type: String}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export default model('Blog', blogSchema)
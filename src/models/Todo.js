import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        trim: true,
        maxLength: [40, "Title cannot be more than 40 characters"]
    },
    description: {
        type: String,
        required: [true, "Please add description"]
    },
    completed: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

export default mongoose.models.Todo || mongoose.model("Todo", ToDoSchema)
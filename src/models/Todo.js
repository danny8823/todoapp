import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        trim: true,
        maxLength: [40, "Title cannot be more than 40 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

export default mongoose.models.Todo || mongoose.model("Todo", ToDoSchema)
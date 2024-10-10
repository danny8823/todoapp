import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://dannyyoo714:Jesuschrist8823!@todo-db.8x2pz.mongodb.net/?retryWrites=true&w=majority&appName=todo-db')
        console.log('db connected')
    } catch(error) {
        throw new Error(error.message)
    }
}

export default connectDB;
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Non déclaré",
        required: false,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        default: 0,
        validate: value => {
            if (value <= 0) {
                throw new Error('Age incorrect')
            }
        }
    }
})

const UserModel = mongoose.model('UserModel', userSchema)

export default UserModel
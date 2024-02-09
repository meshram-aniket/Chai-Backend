import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    
    email: {
        type: String,
        requied: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    }, 
    avatar: {
        type: String, // aniket url
        required: true,
    }, 
    coverImage: {
        type: String,

    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    password: {
        
    }
})

export const User = mongoose.model("User", userSchema)
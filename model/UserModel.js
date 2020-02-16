const mongoose = require('mongoose')

let UserSchema = {
    username:String,
    password:String,
}

let userModel = mongoose.model("User", UserSchema)


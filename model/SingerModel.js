const mongoose = require('mongoose')

let SingerSchema = {
    singer_id: String,
    singer_name: String
}

let singerModel = mongoose.model("Singer", SingerSchema)
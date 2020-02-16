const mongoose = require('mongoose')

let AlbumSchema = {
    album_id: String,
    album_name: String,
    public_time: String,
    week: Number,
    price: Number,
    cover: String,
    singers: Array
}

let albumModel = mongoose.model("Album", AlbumSchema)
const fetch = require('node-fetch');

function AlbumsCrawler(callback) {
    console.log("[INFO] Begin crawler.albums.AlbumsCrawler")
    let url = "http://johnyu.cn:3000/albums"

    fetch(url, { method: 'GET' })
        .then(res => res.json()) // expecting a json response
        .then(json => console.log(json))
}

module.exports = {AlbumsCrawler}
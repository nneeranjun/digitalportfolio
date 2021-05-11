let express = require('express')
let path = require('path')
let app = express()
let port = 8080

app.use(express.static("public"))
app.use('/resume', express.static("public/assets/files/resume.pdf"))

app.route('/')
    .get(function(req, res, next) {
        res.sendFile(path.resolve("public/html/new_index.html"))
    })

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})


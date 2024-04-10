const express = require("express")
const app = express()
const cors = require("cors")

const messageController = require('./controllers/messageController')

const messages = require("./controllers/messageController");

//middleware 

app.use(express.json())
app.use(cors())
app.use("/messages", messageController)




app.get("/", (req, res) => {
    res.status(200).send("<h1>Test Server</h1>")
})


app.get("*", (req, res) => {
    res.status(404).json({
        Error: "Page Not Found"
    })
})








module.exports = app;
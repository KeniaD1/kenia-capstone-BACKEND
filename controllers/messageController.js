const express = require('express')

const messages = express.Router()

const { getAllMessages, getOneMessage, createMessage, updateMessage, deleteMessage } = require('../queries/message')


//get all

messages.get('/', async (req, res) => {
    const allMessages = await getAllMessages()
    // console.log(allMessages)
    if (allMessages[0]) {
        res.status(200).json(allMessages);
    } else {
        res.status(500).json({ error: "error" })
    }
})

//get one 

messages.get('/:messageID', async (req, res) => {
    const messageID = req.params.messageID
    if (Number(messageID)) {
        const oneMessage = await getOneMessage(messageID)
        res.status(200).json(oneMessage)
    } else {
        res.status(404).json({ error: "id must be numeric" })
    }
})

//post message 

messages.post('/', async (req, res) => {
    const body = req.body

    const newMessage = await createMessage(body)

    if (newMessage.id) {
        res.status(200).json(newMessage)
    } else {
        res.status(500).json(newMessage)
    }
})

//update message

messages.put('/:messageID', async (req, res) => {

    const messageID = req.params.messageID

    const body = req.body

    const updatedMessage = await updateMessage(messageID, body)

    if (updatedMessage.id) {
        res.status(200).json(updatedMessage)
    } else {
        res.status(404).json({ error: updatedMessage })
    }


})

//delete message

messages.delete("/:messageID", async (req, res) => {

    const messageID = req.params.messageID
    if (Number(messageID)) {
        const deletedMessage = await deleteMessage(messageID)
        if (deleteMessage.id) {
            res.status(200).json(deletedMessage)
        }
        res.status(404).json({ error: deletedMessage })
    }
    else {

        res.status(404).json({ error: " message id must be numeric" })

    }
})

module.exports = messages
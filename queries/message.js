const db = require('../db/dbConfig')


//get all 

const getAllMessages = async () => {
    try {
        const allMessages = await db.any("SELECT * FROM messages ")
        return allMessages
    } catch (error) {
        return error
    }
}

//get one 

const getOneMessage = async (messageId) => {
    try {
        const oneMessage = await db.one("SELECT * FROM messages WHERE id=$1", messageId)
        return oneMessage
    } catch (error) {
        return error
    }
}
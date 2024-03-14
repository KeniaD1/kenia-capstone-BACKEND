const db = require('../db/dbConfig')


//get all 

const getAllMessages = async () => {
    try {
        const allMessages = await db.any('SELECT * FROM messages')
        return allMessages
    } catch (error) {
        return error
    }
}

//get one 

const getOneMessage = async (messageId) => {
    try {
        const oneMessage = await db.one('SELECT * FROM messages WHERE id=$1', messageId)
        return oneMessage
    } catch (error) {
        return error
    }
}
//post message 
const createMessage = async (valueObj) => {
    try {
        const newMessage = await db.one('INSERT INTO messages (name,post_date,post_time,posted_message) VALUES ($1,$2,$3,$4) RETURNING *', [valueObj.name, valueObj.post_date, valueObj.post_time, valueObj.posted_message])
        return newMessage
    } catch (error) {
        return error
    }
}

//update message

const updateMessage = async (messageId, body) => {

    try {
        const updatedMessage = await db.one('UPDATE messages SET name=$1,post_date=$2,post_time=$3,posted_message=$4 WHERE id=$6 RETURNING *', [body.name,body.post_date,body.post_time,body.posted_message, messageId] )
        return updateMessage
    } catch (error) {
        return error

    }

}

//delete message 

const deleteMessage = async (messageId) => {
    try {
        const deletedMessage = await db.one('DELETE FROM messages WHERE id=$1 RETURNING *', messageId)
        return deletedMessage
    } catch (error) {
        return error
        
    }
}




module.exports = {
    getAllMessages,
    getOneMessage,
    createMessage,
    updateMessage,
    deleteMessage
}
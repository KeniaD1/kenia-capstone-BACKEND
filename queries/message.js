const db = require('../db/dbConfig')

//get all comments 
const getAllCommentsForMessage = async (messageId) => {
    try {
        const comments = await db.any('SELECT * FROM comments WHERE message_id = $1', messageId);
        return comments;
    } catch (error) {
        return error;
    }
};
//create comment 

const createComment = async (messageId, commentData) => {
    try {
        const { user_name, comment_text } = commentData;
        const newComment = await db.one(
            'INSERT INTO comments (message_id, user_name, comment_text) VALUES ($1, $2, $3) RETURNING *',
            [messageId, user_name, comment_text]
        );
        return newComment;
    } catch (error) {
        return error;
    }
};
//get all 

const getAllMessages = async () => {
    try {
        const allMessages = await db.any('SELECT * FROM messages')
        for (const message of allMessages) {
            const comments = await getAllCommentsForMessage(message.id);
            message.comments = comments;
        }
        return allMessages
    } catch (error) {
        return error
    }
}

//get one 

const getOneMessage = async (messageId) => {
    try {
        const oneMessage = await db.one('SELECT * FROM messages WHERE id=$1', messageId)
        const comments = await getAllCommentsForMessage(messageId);
        oneMessage.comments = comments;
        return oneMessage
    } catch (error) {
        return error
    }
}
//post message 
const createMessage = async (valueObj) => {
    try {
        const newMessage = await db.one('INSERT INTO messages (name,posted_message,class) VALUES ($1,$2,$3) RETURNING *', [valueObj.name, valueObj.posted_message, valueObj.class])
        return newMessage
    } catch (error) {
        return error
    }
}

//update message

const updateMessage = async (messageId, body) => {

    try {
        const updatedMessage = await db.one('UPDATE messages SET name=$1,posted_message=$2 WHERE id=$3 RETURNING *', [body.name, body.posted_message, messageId])
        return updatedMessage
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
    deleteMessage,
    createComment,
    getAllCommentsForMessage
}
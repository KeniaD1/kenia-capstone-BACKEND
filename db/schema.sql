DROP DATABASE IF EXISTS messages_dev;

CREATE DATABASE messages_dev;

\c messages_dev;

DROP TABLE messages;

CREATE TABLE messages (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255) NOT NULL,
    post_date DATE NOT NULL DEFAULT CURRENT_DATE,
    post_time TIME NOT NULL DEFAULT CURRENT_TIME,
    posted_message TEXT NOT NULL,
    class VARCHAR(50) NOT NULL
);
 DROP TABLE comments;

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    comment_text TEXT NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
     message_id INTEGER REFERENCES messages(id) ON DELETE CASCADE
);
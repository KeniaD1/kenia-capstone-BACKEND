DROP DATABASE IF EXISTS messages_dev;

CREATE DATABASE messages_dev;

\c messages_dev;

CREATE TABLE messages (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255) NOT NULL,
    post_date DATE NOT NULL DEFAULT CURRENT_DATE,
    post_time TIME NOT NULL DEFAULT CURRENT_TIME,
    posted_message TEXT NOT NULL,
    class VARCHAR(50) NOT NULL
);
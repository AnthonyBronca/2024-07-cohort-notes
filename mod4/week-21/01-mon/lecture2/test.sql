


CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(30) NOT NULL,
    username VARCHAR(25) NOT NULL UNIQUE
);
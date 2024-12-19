-- One-to-Many

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(30) UNIQUE NOT NULL
);


CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post VARCHAR(250) NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


-- insert users

INSERT INTO users (username) VALUES ('anthony');
INSERT INTO users (username) VALUES ('sam');
INSERT INTO users (username) VALUES ('alexi');
INSERT INTO users (username) VALUES ('edward');


-- insert posts

INSERT INTO posts (post, user_id) VALUES ('Hello world', 1);
INSERT INTO posts (post, user_id) VALUES ('I am sam', 2);
INSERT INTO posts (post, user_id) VALUES ('I am alexi', 3);
INSERT INTO posts (post, user_id) VALUES ('I am edward', 4);
INSERT INTO posts (post, user_id) VALUES ('This SQL', 1);


-- QUERIES

-- SELECT * FROM users;
-- SELECT * FROM posts;

SELECT post, users.username FROM posts JOIN users ON (posts.user_id) = (users.id);

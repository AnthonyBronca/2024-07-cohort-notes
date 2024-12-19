-- One - To - Many: One piece of data has many related pieces of sub_data
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;


CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(25) UNIQUE NOT NULL
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post VARCHAR(250) NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


-- inserting users
INSERT INTO users (username) VALUES ("anthony");
INSERT INTO users (username) VALUES ("sam");
INSERT INTO users (username) VALUES ("alexi");


-- inserting posts

INSERT INTO posts (post, user_id) VALUES ("hello world", 2);
INSERT INTO posts (post, user_id) VALUES ("I am sam", 2);
INSERT INTO posts (post, user_id) VALUES ("I am alexi", 3);

SELECT * FROM users;
SELECT * FROM posts;

-- THIS DOES NOT WORK
-- SELECT username FROM posts WHERE user.id = posts.user_id;


-- TO QUERY ITEMS WITH A FOREIGN KEY AND ATTACH, THEM WE CREATE A TEMPORARY JOIN TABLE
SELECT posts.id, post, users.username FROM posts JOIN users ON (posts.user_id) = (users.id);

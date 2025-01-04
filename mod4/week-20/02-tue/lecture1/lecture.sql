DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    post VARCHAR(500) NOT NULL
);

INSERT INTO posts (user_id, post)
VALUES (1, 'hello world');

INSERT INTO posts (user_id, post)
VALUES (1, 'Today I am learning SQL');

INSERT INTO posts (user_id, post)
VALUES (1, 'Typescript > Javascript');

INSERT INTO posts (user_id, post)
VALUES (2, 'I am user number 2');

INSERT INTO posts (user_id, post)
VALUES (3, 'Do you want to build a snowman?');

INSERT INTO posts (user_id, post)
VALUES (3, 'Santa, I need money for christmas!');

INSERT INTO posts (user_id, post)
VALUES (4, 'How much wood could a wood-chuck chuck?');

INSERT INTO posts (user_id, post)
VALUES (4, 'I am running out of random giberish to write in these LOL');

INSERT INTO posts (user_id, post)
VALUES (5, 'I am user 3');

INSERT INTO posts (user_id, post)
VALUES (6, 'Did you know that we have all of next week off?');

INSERT INTO posts (user_id, post)
VALUES (7, 'I hid an easter egg in the hws lol');

INSERT INTO posts (user_id, post)
VALUES (7, 'Just writing some filler here because idk');


-- QUERIES

-- grab all columns from a given table
-- SELECT * FROM posts;
-- SELECT user_id,post FROM posts;

-- WHERE

-- SELECT * FROM posts WHERE post = "hello world";


-- IN

-- SELECT * FROM posts WHERE user_id IN (1,3);

-- BETWEEN
-- SELECT * FROM posts WHERE user_id BETWEEN 1 AND 3;


-- LIMIT and OFFSET
-- SELECT * FROM posts LIMIT 5 OFFSET 5;


-- ORDER BY and DESC
-- SELECT * FROM posts ORDER BY user_id DESC;


-- AND to grab something that meets two conditions

-- SELECT * FROM posts WHERE user_id = 1 AND LENGTH(post) > 12;


-- LIKE

-- SELECT * FROM posts WHERE post LIKE "%lol";


-- UPDATE
UPDATE posts SET post = "TypeScript > JavaScript :)" WHERE post LIKE "% Javascript";

-- DELETING
-- DELETE FROM posts WHERE post = "hello world";
-- DELETE FROM posts WHERE post LIKE "%lol";
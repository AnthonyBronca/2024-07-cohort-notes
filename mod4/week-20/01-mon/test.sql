DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS teachers;

CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(300) NOT NULL,
    major VARCHAR(50) NOT NULL,
    is_enrolled BOOLEAN DEFAULT FALSE,
    age NUMERIC(3,1)
);


CREATE TABLE teachers (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(300) NOT NULL,
    department VARCHAR(50) NOT NULL
);


INSERT INTO students (id, first_name, email, major, is_enrolled, age)
VALUES (1, 'bob', 'bob@g.com', 'computer science', true, 3);

INSERT INTO students (id, first_name, email, major, is_enrolled, age)
VALUES (2, 'bill', 'bill@g.com', 'business', true, 20);

INSERT INTO students (id, first_name, email, major, is_enrolled, age)
VALUES (3, 'joe', 'joe@g.com', 'health', false, 14);

INSERT INTO students (id, first_name, email, major, is_enrolled, age)
VALUES (4, 'jane', 'jane@g.com', 'computer science', true, 21);

INSERT INTO students (id, first_name, email, major, is_enrolled, age)
VALUES (5, 'sandy', 'sandy@g.com', 'political science', true, 30);

INSERT INTO students (id, first_name, email, major, is_enrolled, age)
VALUES (6, 'puffs', 'puffs@g.com', 'health', false, 50);

INSERT INTO students (id, first_name, email, major, is_enrolled, age)
VALUES (7, 'patrick', 'patrick@g.com', 'computer science', true, 7);

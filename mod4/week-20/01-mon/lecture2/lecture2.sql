
-- Students

-- name | email | major | teacher

-- bob | bob@g.com | computer science | ant
-- joe | joe@g.com | health | sam
-- jane| jane@g.com| computer science | ant



-- to delete a table
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS teachers;

CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    major VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    is_enrolled BOOLEAN NOT NULL DEFAULT TRUE
);

-- teacher

CREATE TABLE teachers (
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    course VARCHAR(50) NOT NULL
);



INSERT INTO students ( first_name, email, major, age)
VALUES ('bill', 'bill@g.com', 'computer science', 20);

INSERT INTO students ( first_name, email, major, age)
VALUES ('joe', 'joe@g.com', 'health', 23);

INSERT INTO students ( first_name, email, major, age)
VALUES ('jane', 'jane@g.com', 'computer science', 22);

INSERT INTO students ( first_name, email, major, age)
VALUES ('bill', 'bill2@g.com', 'computer science', 20);

-- TO VIEW THE DATA WE NEED TO DO A QUERY

SELECT * FROM students;




-- name | email | course

-- bill | bill@g.com | math
-- ant | ant@g.com | computer science
-- sam | sam@g.com | health


DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS teachers;

CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    major VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    is_enrolled BOOLEAN NOT NULL DEFAULT FALSE
);


CREATE TABLE teachers (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- ADD DATA INTO OUR TABLES

INSERT INTO students (first_name, email, major, age)
VALUES ('bob','bob@gmail.com', 'computer science', 20);

INSERT INTO students (first_name, email, major, age)
VALUES ('bill','bill@gmail.com', 'health', 23);

INSERT INTO students (first_name, email, major, age)
VALUES ('joe','joe@gmail.com', 'computer science', 21);



-- MAKE A QUERY TO VIEW STUFF (RETRIEVE DATA)

SELECT * FROM students;

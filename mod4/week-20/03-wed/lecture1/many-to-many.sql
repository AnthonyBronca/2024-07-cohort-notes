-- MANY - TO - MANY

DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS student_courses;

CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(50) NOT NULL
);


CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE student_courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- insert students
INSERT INTO students (first_name) VALUES ('anthony');
INSERT INTO students (first_name) VALUES ('sam');
INSERT INTO students (first_name) VALUES ('alexi');
INSERT INTO students (first_name) VALUES ('edward');

-- insert courses

INSERT INTO courses (course_name) VALUES ('Alegebra 1');
INSERT INTO courses (course_name) VALUES ('Biology');
INSERT INTO courses (course_name) VALUES ('English Literature');
INSERT INTO courses (course_name) VALUES ('Political Science');
INSERT INTO courses (course_name) VALUES ('Spanish 2');

-- insert some student courses

INSERT INTO student_courses (student_id, course_id) VALUES (1, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (1, 2);
INSERT INTO student_courses (student_id, course_id) VALUES (1, 3);
INSERT INTO student_courses (student_id, course_id) VALUES (2, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (2, 4);
INSERT INTO student_courses (student_id, course_id) VALUES (2, 5);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 3);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 5);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 3);


-- QUERIES
-- SELECT * FROM students;
-- SELECT * FROM courses;
-- SELECT * FROM student_courses;













SELECT students.id, students.first_name, courses.course_name FROM students
JOIN student_courses ON student_courses.student_id = students.id
JOIN courses ON student_courses.course_id = courses.id;

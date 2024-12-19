-- many-to-many

DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS student_courses;



CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(30) NOT NULL
);

CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE student_courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER,
    course_id INTEGER,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);


-- insert students

INSERT INTO students (first_name) VALUES ('anthony');
INSERT INTO students (first_name) VALUES ('alexi');
INSERT INTO students (first_name) VALUES ('sam');
INSERT INTO students (first_name) VALUES ('edward');


-- insert courses

INSERT INTO courses (course_name) VALUES ('Algebra 1');
INSERT INTO courses (course_name) VALUES ('Biology');
INSERT INTO courses (course_name) VALUES ('Spanish 2');
INSERT INTO courses (course_name) VALUES ('Political Science');
INSERT INTO courses (course_name) VALUES ('World History');
INSERT INTO courses (course_name) VALUES ('American Literature');

-- insert into student_courses

INSERT INTO student_courses (student_id, course_id) VALUES (1, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (1, 2);
INSERT INTO student_courses (student_id, course_id) VALUES (1, 3);
INSERT INTO student_courses (student_id, course_id) VALUES (2, 5);
INSERT INTO student_courses (student_id, course_id) VALUES (2, 6);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 3);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 5);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 2);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 6);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 7);
INSERT INTO student_courses (student_id, course_id) VALUES (1, 7);

-- QUERIES

-- SELECT * FROM students;
-- SELECT * FROM courses;
-- SELECT * FROM student_courses;


-- MANY-TO-MANY QUERIES STUDENTS <- STUDENT_COURSES <- COURSES
SELECT students.first_name, courses.course_name FROM students
JOIN student_courses ON (students.id) = (student_courses.student_id)
JOIN courses ON (courses.id) = (student_courses.course_id);

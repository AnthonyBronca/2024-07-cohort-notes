# Relationships

Tables can have relationships too! So how does it happen? Well, when 2 tables love each other...

This is not that type of relationship! In SQL we have relationships where tables can `associate` with others. To do this though, they need to pass off a little piece of themselves to share (almost like how humans give rings and penguins give pebbles). We call this piece a `FOREIGN KEY`. It allows the table that receives the `FOREIGN KEY` to keep track of and reference the data it has the other table that passed its data.

## USING SQL

Let's create two tables:

```sql
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post VARCHAR(250) NOT NULL,
    user_id INTEGER
);

```

This works in a psuedo-relationship type of way because yes we do have the "user_id" as an INTEGER in the "posts" table. The only issue is when we want to query the data, they are not actually related. So as we talked about before, one of the tables needs to give off their `FOREIGN KEY` to the other. Here, we are going to inherit this on the "user_id"

```sql
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post VARCHAR(250) NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

Notice we are using the `FOREIGN KEY` command and applying it to the "user_id" within the "posts" table, however, we create a reference using `REFERENCES` to connect one table to the other, in the case connecting it to the talbe "users" specifically the column "id" on users.


This will allow us to now connect two tables using when querying

### Querying Related Tables

We can use a `SELECT * FROM posts;` in the example above, however, this will just give us data from the `posts`. Sure, we have the user_id to whom each post belongs to, but what if I want to see the username of the person the "post" belongs to.

We can use the `JOIN` contraint to handle this:


```sql
SELECT * FROM posts JOIN users ON (posts.user_id) = (users.id);
```

Here we want to grab all the columns from posts, however, we are actually creating a new temporary table for us to view. So we use the "posts" table as a basis and then add on to it with `JOIN`, specifically `ON` on foreign key. The foreign key being `(posts.user_id)` and making sure that it is the same as the `users.id` table. Anywhere these two ids match, they must be related therefore we can attach them to create a new visually appealing table with all the data combined.


Now, notice that we do not have a backwards relationship established. We only have a `FOREIGN KEY` on the "posts" table. This one-way relationship will establish what we call a `One-To-Many` relationship.

One user can have Many posts. But 1 post can not be owned by many users.

So how would we establish a many-to-many relationship?

## Many-To-Many

A many-to-many table will require us to create 3 tables. we need a middle man. This is what we call a `JOIN Table`

Let's say we have 3 tables, Students, Courses, and a StudentCourse Table (the join table):

```sql

DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS student_courses;

CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(50) NOT NULL
);

CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_name VARCHAR(50) NOT NULL
);


CREATE TABLE student_courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

Here, we can create a student, and create a course. The relationship is established because of their connections `through` the "student_courses" `JOIN TABLE`.

Here is some fake data to insert:

```sql

INSERT INTO students (first_name) VALUES ("anthony");
INSERT INTO students (first_name) VALUES ("sam");
INSERT INTO students (first_name) VALUES ("alexi");
INSERT INTO students (first_name) VALUES ("edward");


INSERT INTO courses (course_name) VALUES ("Alegbra");
INSERT INTO courses (course_name) VALUES ("Biology");
INSERT INTO courses (course_name) VALUES ("Guitar 3");
INSERT INTO courses (course_name) VALUES ("Political Science");
INSERT INTO courses (course_name) VALUES ("American Literature");


INSERT INTO student_courses (student_id, course_id) VALUES (1, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (1, 2);
INSERT INTO student_courses (student_id, course_id) VALUES (1, 3);
INSERT INTO student_courses (student_id, course_id) VALUES (2, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (2, 3);
INSERT INTO student_courses (student_id, course_id) VALUES (2, 4);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 2);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 3);
INSERT INTO student_courses (student_id, course_id) VALUES (3, 4);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 1);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 2);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 3);
INSERT INTO student_courses (student_id, course_id) VALUES (4, 5);
INSERT INTO student_courses (student_id, course_id) VALUES (1, 5);
```
Notice that we have to create a student, create a course, and then create the relationship within the `join table`.

So how do we query this:

We can start by selecting a table to start grabbing from, then we can use 2 JOIN to hook it all up:

```sql
SELECT * FROM students
JOIN student_courses ON student_courses.student_id = students.id
JOIN courses ON student_courses.course_id = courses.id;
```

The problem with this right now is that we also have the not needed data of the student_courses ids. We can get rid of this in the `SELECT` portion by specifying which columns from which tables we want:

```sql
SELECT students.id, students.first_name, courses.course_name FROM students
JOIN student_courses ON student_courses.student_id = students.id
JOIN courses ON student_courses.course_id = courses.id;

```

This should output something that looks like this:


| id | first_name |     course_name     |
| ---| ---------- | --------------------|
| 1  | anthony    | Alegbra             |
| 1  | anthony    | Biology             |
| 1  | anthony    | Guitar 3            |
| 2  | sam        | Alegbra             |
| 2  | sam        | Guitar 3            |
| 2  | sam        | Political Science   |
| 3  | alexi      | Alegbra             |
| 3  | alexi      | Biology             |
| 3  | alexi      | Guitar 3            |
| 3  | alexi      | Political Science   |
| 4  | edward     | Alegbra             |
| 4  | edward     | Biology             |
| 4  | edward     | Guitar 3            |
| 4  | edward     | American Literature |
| 1  | anthony    | American Literature |

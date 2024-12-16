# Structured Query Language and Databases

## Summary
Up until now, we have been having to work with databases that do NOT persist. This means that data is only accessible during that code's instance of run-time. A `database` is essentially a file/collection of files that we can write to and read from through different sessions. We will be using `sqlite3` for now as a way for us to manage our database files, and we will be utilizing `SQL` as a coding language to write/retrieve to these database files.


## Databases

A `Database` is a file/ collection of files that we write to. Imagine you are an accountant back in the age before computerization. You would have to write everything manually to some log book. This was the database of the times. Now, we have digitalized this "log book" which has drastically increase the size and efficiency of databases. There are two main types of databases you may use in software development:

- Relational Database
- Non-Relational Databases


### Relational Database

These are the databases we will be using in this course as it is more complex to learn, more widely used, and easier to transition to non-relational databases later.

A relational database is almost like if you have 3 - 4 of those accounting log books. Maybe each log book is just a piece of the pie, but they all contain their own roles. For this example, imagine that you are building an application to manage students, teachers, and courses. You might have 3 `Tables` for each of these items, and they will all have their unique `columns`. In a relational database, these columns can be "handed-off" to the other table for references and look ups:


Here is an example of a Student Table:

| name | email | major |
| ---  | ----- | ----- |
| bob  | bob@g.com | computer science |
| bill | bill@g.com | business |
| joe  | joe@g.com | health |
| jane | jane@g.com | computer science |
| puffs | puffs@g.com | health |
| sandy | sandy@g.com | political science |
| patrick | patrick@g.com | computer science |


Here is an example of a Teacher Table:

| name | email | department |
| ---- | ----- | ---------- |
| krabs | kk@g.com | computer science |
| flats | flats@g.com | athletics |
| tt stangler | tts@g.com | criminal justice |
| squidlium | squidlium@g.com | business |
| squidward | squidward@g.com | art |



Firstly, notice that in these 2 tables we may share the same variable names of "name" and "email" across the "Student" and "Teacher" tables, but it is important for us to realize that these are not related in anyway. They have their own information and are not connected. But we can establish a relationship between them. One way to do this is to attach another column with a reference to a piece of data from the other's data. Let's try to assign a teacher to each of the students:


| name | email | major | teacherName |
| ---  | ----- | ----- | ------- |
| bob  | bob@g.com | computer science | krabs |
| bill | bill@g.com | business | squidlium |
| joe  | joe@g.com | health | Null |
| jane | jane@g.com | computer science | krabs |
| puffs | puffs@g.com | health | null |
| sandy | sandy@g.com | political science | tt strangler |
| patrick | patrick@g.com | computer science | krabs |


Now we have a piece of data from the "Teacher"s table living on the "student"s table. This can help us with `querys` later.


> Common Relational Database Management Systems (RDBMs):
    - Postgres
    - Sqlite
    - MySql
    - Oracle

### Non-Relational Database

A non-relational database is usually consisted of objects and key value pairs. While you can establish a "psuedo" relationship in these types of databases, it is often forced and much trickier to accomplish as these would not be used for such things. Imagine you are building a blogging website. Each individual blog does not need to have relationships to data that exists outside of the blog posting itself. So you can establish all the data of a blog within an object. Maybe something like this:

```js

const blog1 = {
    articleHeader: "How to Code",
    author: "anthony",
    sections: {
        summary: "A guide on how to code for people who don't know how to code",
        main: "enter a bunch of gibberish text here",
        closing: "idk what to write here"
    },
    date: "12-15-2024",
    language: "english",
    otherArcticleLinks: [
        "article1.com",
        "article2.com",
        "article3.com"
    ]
}

```

This works perfectly for storing data in, and may seem very similar to some of the code we have written up until now. This works perfectly fine for some types of applications, but scaling for relationships later on can be tougher so it is important to consider that in the planning process of any applications when establishing scopes.


A common Non Relational Database is MongoDB which uses "document" objects like the one above to store and access data.



## SQL (Structured Query Language)

SQL is *NOT* a programming language. You do not use it for managing code via loops, ifs, and scripting processes. Instead, it is known as a `declarative` language. You tell it what you want, and it will do it. It is very similar to how CSS worked.


In SQL we have a few `types` we can utilize, just like in javascript.

### Types:

- Numbers
    - `INTEGER`: A whole number
    - `DECIMAL`: A floating point number
    - `BIGINT`: A number with much large sizes. Can be useful if your numerical has more than 9 digits
- Strings
    - `VARCHAR`: A combination of characters set to specified max size
    - `TEXT`: Much larger combination of characters since it can contain "unlimited" characters. This is slow to use though
- Booleans
    - `true`: SQLITE WILL TURN THIS INTO 1
    - `false`: SQLITE WILL TURN THIS INTO 0
- Others:
    - `BLOB`: Data in original formatting. Useful for videos, images, and chunks of data



You can set columns in `SQLite` to have specific data types. This means all data entered within that column must follow that data type structure. For example a column made of only `INTEGER` entries.


### Column Constaints

- `NULL`: Specifically set data as non-existant
- `NOT NULL`: specifically set data as must exist
- `DEFAULT`: Used to set a templated data input when nothing is passed in on creation
- `PRIMARY KEY`: Used to set a unique identifier on an entity. Almost like color coding a manual book entry
- `INTEGER PRIMARY KEY`: A Numerical look up identifier used for quicker look up that can easily be set to unique
- `AUTOINCREMENT`: Will automatically increment the number based on the last entry for any new entries


## Accessing a database

Most databases are stored within some port/url either on your local machine or some server running elsewhere. `SQLITE` is an exception in that it is a locally stored file. This makes it great for things like `mobile development` or creating light-weight databases.


*NOTE*: SQLITE is a VERYYYYY flexible RDMS. This can be a "blessing" for beginners, but it quickly will become a curse when you try to deploy things. SQLITE was originally intended to be used as the middle-man when trying to convert from one RDMS to another and you needed to temporarily store data to avoid loss of data in the transfer process. IT IS NOT USED ON THE PRODUCTION SIDE OF WEB DEVELOPMENT.


Once you have `sqlite3` installed, you can access it by running:

```
sqlite3
```

In the terminal. This will open a `transient` database. This means the database will only exist for the duration of that run. It is NOT saving data within a file.

*NOTE*, I recommend setting an alias in your `.bashrc` or `.zshrc` file so that you can just use `sqlite` rather than `sqlite3`. You will see me use `sqlite` for the remainder of this course.


We can use the `command line` to open our sqlite based on a `.db` file. So for example:

```
sqlite3 myDatabase.db
```


## SYNTAX OF SQL

SQL has some unique and very strict syntax rules, just like CSS had.

1. TYPES and DECLARATIONS: should be capital to help other devs read data vs code
2. SQL is SPACE AWARE: This means you must avoid any blank spaces when not needed. Data columns with "spaces" should use an underscore instead. Example: `first_names`.
3. We can create tables using `()`. Almost like how we made objects using `{}` in JS.
4. DO NOT leave any trailing commas. Similar to how it worked in JSON
5. SEMI-COLONS: required at the end of each declaration
6. Tables should be plural
7. Lines are comma seperated
8. SINGLE QUOTES: used for strings


### Examples

#### Creating Tables

Let's create a table using SQL matching the student and teacher tables we created above

Here are the tables again for ease-of-reference:

STUDENT TABLE
| name | email | major |
| ---  | ----- | ----- |
| bob  | bob@g.com | computer science |
| bill | bill@g.com | business |
| joe  | joe@g.com | health |
| jane | jane@g.com | computer science |
| puffs | puffs@g.com | health |
| sandy | sandy@g.com | political science |
| patrick | patrick@g.com | computer science |


TEACHER TABLE
| name | email | department |
| ---- | ----- | ---------- |
| krabs | kk@g.com | computer science |
| flats | flats@g.com | athletics |
| tt stangler | tts@g.com | criminal justice |
| squidlium | squidlium@g.com | business |
| squidward | squidward@g.com | art |

(note I am changing "name" -> "first_name" because "name" is a protected key-word. Also adding other columns for example purposes)
```sql
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

```

Once we have a database file instantiated, we can read it using `sqlite` in the terminal.
Then we can execute SQL from a file using the `.read <file name>` command in the sqlite shell.

If we want to see what tables we have we can use `.tables`. If we want to see the structure of a table we can use:
`.schema <table name>`





#### DROPPING TABLES

Once we created a table, we can drop it *IF IT EXISTS* using:

`DROP TABLE <table name>;`

To drop the students table we would use:

`DROP TABLE students;`

It is good practice to drop tables (when learning sql) on file read so that we can make sure data is being set up properly. We would run into a bug if a table already existed and we were trying to re-create that same table.

Example
```sql
DROP TABLE IF EXISTS students;
```



#### INSERTING DATA

Now that we have tables to insert into, we can create data and place it within a specified table:


```sql

INSERT INTO students (id, first_name, email, major, is_enrolled, age)
VALUES (1, 'bob', 'bob@g.com', 'computer science', true, 3);
```

*NOTE*: We have to tell SQL that we want to insert into all the columns, and ORDER MATTERS. Then, we can specify which values will fill in those columns. Be especially careful if you are forgetting to insert data where data is required (not null)


We can now view the data using a `SQL` command either in the file after insertion, or directly into the `sqlite` shell:


```SQL
SELECT * FROM students;
```

This will grab all items from students.




### ADDITIONAL NOTES

I recommend making a `.sqliterc` file at the `~/` directory of your system.

Then you can insert some settings for SQLITE to use:

```
.headers on
.mode box
```

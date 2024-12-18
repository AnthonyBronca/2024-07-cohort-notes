# SQL Queries

We learned so far how to create database tables and insert data entries into the database. But the usefulness of having data stored somewhere is that you can retrieve it. This is where `queries` come in to play. There are basic queries, and complex queries. Let's look at a few




### Set Up

If you want to follow along, run this code in a .sql file and load it into a .db file like we practiced yesterday


```sql
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


```

## Queries

Let's start off with a basic query to retrieve `all the data`. To do this, we use the `*` symbol:

```SQL
SELECT * FROM posts;
```

This will return back a data table of all columns and entries within the posts.

To disect this query structure, the stuff to the LEFT of the `FROM` refers to the columns we want, and the stuff to the RIGHT of the `FROM` will modify the type of entries we get.

So if we want to instead only see all the posts and not see which user made the post we can modify the query to be like:


```sql
SELECT post FROM posts;
```


### Clauses and Operators

To affect the RIGHT side of a `FROM` query, we can insert `Clauses` and/or `Operators` to help us specify the type of entries we want to get back.

Some common Clauses and Operators:

- `WHERE`: Creates a filter based on the column being equal to some type of data
- `IN`: Chained to the `WHERE` we can search if the column is IN a list of values
- `BETWEEN`: Used when checking `WHERE`s of a `NUMERIC` typed column where want a range
- `ORDER BY`: Used to make the entries come back in a specific order like alphbetical, big to small etc.
- `DESC`: `ORDER BY` Defalts to ascending. We can reverse this using the `DESC` Operator
- `LIMIT`: Sets the total number of entries we want to get back. If I have 1 million entries and only want 5 at a time, we can set a limit of 5.
- `OFFSET`: If we had a limit getting back 5, we would always get the same 5 back using the same query. We can add an `OFFSET` to determine where the count should start. Example: 1 - 6, 7 - 11, 12 - 17 and so on.
- `AND`: checks if both sides of operations are true
- `EXISTS`: Makes sure something returns a record (useful for only running queries where you aren't sure if the data exists, like dropping tables)
- `LIKE`: returns entries that matches a pattern
- `NOT`: returns entries if it does not meet a given condition
- `OR`: returns entries that meet one or more conditions




#### EXAMPLES

WHERE:
```sql
SELECT post FROM posts WHERE user_id = 1; -- grabs all the posts made by user 1
```

IN:
```sql
SELECT * FROM posts WHERE user_id IN (1,2); -- grabs all posts by users 1 and 2
```

BETWEEN:

```sql
SELECT * FROM posts WHERE user_id BETWEEN 1 AND 3; -- grabs all posts by user 1 - 3
```


ORDER BY (default):
```sql
SELECT * FROM posts ORDER BY user_id; -- grabs the posts ordering them by user id
```

ORDER BY (with DESC operator)
```sql
SELECT * FROM posts ORDER BY user_id DESC; -- grabs the posts by user_id where it descends by user_id
```


LIMIT
```sql
SELECT * FROM posts LIMIT 3;
```

To make sure you can grab the next batch of 3 we can use `OFFSET`

OFFSET
```sql
SELECT * FROM posts LIMIT 3 OFFSET 3;
```


`AS` for renaming and `LENGTH` to get the size of the data

```sql
SELECT post as post, LENGTH(post) as post_length FROM posts;
```

AND
```sql
SELECT post FROM posts WHERE LENGTH(post) > 11 AND user_id=1; -- grabs posts made by user 1 where length of of post is bigger than 11
```

LIKE

```sql
SELECT post FROM posts WHERE post LIKE "I%"; -- grabs all posts that start with "I"
```

LIKE (another example)

```sql
SELECT post FROM posts WHERE post LIKE "%lol"; -- case insentive find for anything ending in "lol" or "LOL"
```



# Manipulating Data

We have learned how to query data, and how to insert it, but now we need to learn how to modify data. This can be either `deleting` or `updating` data entries



## DELETE
Combining what we learned with `queries`, rather than `SELECT`ing the data, we can instead choose to `DELETE` the data that meets a condition.

We need to DELETE FROM a table WHERE a column data entry meets one or more conditions

```sql
DELETE FROM posts WHERE post LIKE "hello%"; -- deletes posts that start with "hello'
```

## UPDATE
Combining what we learned with `queries`, rather than `SELECT`ing the data, we can instead choose to `UPDATE` the data that meets one or more conditions.

UPDATE table SET new data WHERE condition is met
```sql
UPDATE posts SET post = "TypeScript > JavaScript" WHERE post = "Typescript > Javascript";
```

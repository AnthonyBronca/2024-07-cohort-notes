# ALEMBIC CHEAT SHEET


1. to create you migrations:

```
pipenv run flask db init
```


2. create our migrations

```
pipenv run flask db migrate
```


3. add your migrations to the database: run sql commands using python

```
pipenv run flask db upgrade
```


4. to delete your migrations

```
pipenv run flask db downgrade
```

# W35D2 - Intro to Flask, SQLite3, and Templating


## Getting started with Flask & SQLite3


### Flask app setup

1. Install flask
```bash
pipenv install flask
```
2. Create a folder for your application with a `__init__.py`.
3. Import `Flask` in the `__init__.py`
```py
from flask import Flask
```
4. Instantiate a `Flask` instance
```py
app = Flask(__name__)
```


---

### Flask app setup

4. Add a `.flaskenv` file. This file sets publicly visible environment variables for your Flask app
```bash=
FLASK_APP=app
FLASK_ENV=development
```
5. Install python-dotenv to load environment variables into the app configuration
```bash
pipenv install python-dotenv
```
6. Run your application!
```bash
pipenv run flask run
```

---

### Adding routes

We use the `@route` decorator to turn a function into a route that exists on our application. Whatever we `return` from the function will get sent to the browser.
```py
@app.route("/")
def index():
    return "Welcome to our app"
```

---

### Adding a secret key (or other configuration variables)

In addition to the `.flaskenv` file which contains environment specific (not secret) information, we can use a `.env`.

This file contains environment variables we want to keep secret. Unlike `.flaskenv`, it will *not* be committed to GitHub.

```bash=
SECRET_KEY=EXTREMELYsecretstufffshhhhhhhh
```

---

### Making a Config class

Get the secret values from your `.env` and define a `Config` class which has all of the values you want to incorporate into your app.

```py
import os

class Config():
    SECRET_KEY = os.environ.get('SECRET_KEY')
```

Then incorporate these values into your application using the the `config.from_object method`.


```py
# in the __init__.py in the app folder
from flask import Flask
from book_app.config import Config

app = Flask(__name__)
app.config.from_object(Config)
```
---

## SQLite3


Python has a built in module named `sqlite3` which allows us to connect directly to a SQLite3 database file from Python.

It is NOT the equivalent of Sequelize. We can use it directly, but typically we will want to use an actual ORM (SQLAlchemy).


---


### Setting up `sqlite3` [1/2]

1. Import the `sqlite3` package at the top of your file.
```py
import sqlite3
```
2. Create a new database to connect to in the terminal.
```py
sqlite3 dev.db
```
3. Set up your connection parameters (file name for the SQLite3 database).
```py
DB_FILE = "dev.db"
```

---

### Quick note: the `with` keyword

 - `with` works like a `try/except/finally` block wrapped up into one keyword! It runs some setup logic, then "tries" the code in the `with` block, and whether or not it runs into an error, it runs some clean up code.

 - It is used to more easily manage common resources (e.g. closing a database connection, a file, etc.) We do not need to define anything, how to use the `with` keyword is defined in the modules.

 - We will use the `with` keyword to manage our database connections with `sqlite3`.


---

### Setting up `sqlite3` [2/2]

4. Open a connection to the database. Use the `with` keyword, and the `connect` method on `sqlite3`:
```py
with sqlite3.connect(DB_FILE) as conn:
```

5. Open a "cursor" to perform data operations.
```py
with sqlite3.connect(DB_FILE) as conn:
    curs = conn.cursor()
```
6. With our cursor, we can use the `execute` method to run a SQL command:
```py
with sqlite3.connect(DB_FILE) as conn:
    curs = conn.cursor()
    curs.execute(
            """
            CREATE TABLE jokes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            joke_body VARCHAR(250),
            punchline VARCHAR(250),
            rating VARCHAR(15)
            );
            """
    )
```


---

### Executing SQL with `sqlite3`

After executing a command, we can fetch the results using the `fetchone` or `fetchall` methods on the cursor.
- `fetchone()` will return a tuple of the first matched record
- `fetchall()` will return a list of tuples of all matching records
```py
# Fetching one record
with sqlite3.connect(DB_FILE) as conn:
    curs = conn.cursor()
    curs.execute(
        """
        SELECT *
        FROM jokes;
        """
    )
    results = curs.fetchall()
    print(results)
```


---


### Creating data with `sqlite3`
We can use parameterized SQL statements to insert data into our database.
```py
# Inserting a new record
def create_joke(joke_body, punchline, rating):
    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        curs.execute(
            """
            INSERT INTO jokes (joke_body, punchline, rating)
            VALUES(:joke_body, :punchline, :rating)
            """,
            {
                "joke_body": joke_body,
                "punchline": punchline,
                "rating": rating
            }
        )
```

---

## Templating

Main reasons to use templating
- "Easier"
  - If you understand the template language very well, it's easier
  - A complex React App's JSX can be messier than using templates
- Lightweight
  - Much easier to run than a React App
  - Generally used for internal tools, in development, etc
    - You wouldn't book a flight to a place you can walk to
    - You shouldn't build a React App for a task you can template
- You might see it somewhere in the real world
  - Might not be Jinja, but templating is very similar across many implementations
- Not really any other reasons to use templates
  - If the above cases don't apply, use React

---

### Templating with Jinja
- Jinja is an HTML templating language (similar to Pug)
- Add the Jinja package to your application (Optional, flask comes with Jinja as a dependency)
  - `pipenv install Jinja2`
- Flask looks for HTML templates in the `templates` folder inside the `app` package
    - Create a `templates` folder within your application
    - In `templates`, create HTML files that you would like your routes to render

---

### Rendering Templates
- In your app, import `render_template` from `flask`.
    - `render_template` renders an HTML page using the Jinja template engine
- Instead of returning HTML strings directly, call `render_template`, passing the name of the HTML file you would like to render
```py
@app.route('/')
def index():
	return render_template('index.html')
```

---

### Rendering Templates with Arguments
- We can pass objects from our routes to `render_template` for use in our HTML files.
- Objects are passed as kwargs, where the key is the name of the item referenced in the HTML file, and the value is the object itself from the route.

```py
@app.route('/')
def index():
    return render_template('index.html', display_item=value)
```

---


### Redirecting to Another Route
- We can redirect to another route with `redirect()`
- `redirect()` takes a string for the route location to redirect to and an optional default status code if the redirection is unsuccessful

```py
@app.route('/')
def index():
    return redirect('/all', 404)
```

---

### Accessing Objects and Evaluating Code

- In our HTML files, we use `{{ display_item }}` to access objects that were passed in as kwargs to `render_template`
- We use the `{% %}` syntax to evaluate code within an HTML file
```py
{% for x in items %}
{% endfor %}
```
```py
{% if condition_a %}
{% elif condition_b %}
{% else condition_c %}
{% endif %}
```

---

### Extending Content
We can use `extends` to reuse a base template in other HTML files:
```py
{% extends "base.html" %}
```

The base template can include a placeholder for content from other HTML files:
```py
{% block content %} {% endblock %}
```
Our other HTML files use the same tags to fill in that content.

---

### Including Content

You can break your templates into React-like "components" by simply making more template files

Then, combine using the `include` keyword

```html
<!-- /app/templates/other_page.html -->
<h2>This sure is some other page!</h2>

<!---->
<!---->
<!---->

<!-- /app/templates/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <h1>Hello {{ user }}!</h1>
    {% include 'other_page.html' %}
  </head>
</html>
```

### Remainder of the day:
Walkthrough a

### Brad's Lecture Timestamps
```
   00:00  - Initial Setup
   24:00  - Routes
   38:22  - Templating
 1:07:39  - Blueprints
 1:25:17  - Sqlite3 Connection
```

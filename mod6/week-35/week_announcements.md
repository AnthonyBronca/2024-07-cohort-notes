## Topics we will cover this week:

1. Flask (building a server with Python)
2. Jinja (templating framework)
3. WTForms
4. Try to get to SQLAlchemy, but we also have all next week to do that if needed

-----------------------------------------------

## Flask

Flask is a server-side development framework built using Python. It allows us to quickly set up starter applications, and use Python's easy-to-read pros to make very readable backends

### What it is used for

While you can make a production level backend with Flask (which we will do with Group projects),
Flask is not the greatest for scaling. As an example, Flask can handle about 30k GET requests a minute, and Express can do about 65k GET requests a minute.

So why would we want to use Flask?

If you go in to backend engineering you will want to be able to test the skeleton for some design implementations without having to commit to writing more complex code.

If you have to build a small scale project that won't really grow much (think like an office, restaurant, small business)

A Basic Flask application needs a few things:

1. an init.py file (don't forget the dunders)
2. A config file
3. a .flaskenv file
4. setting up an app with passed in config
5. a .venv
6. some routes

We will be learning about adding Forms and Jinja to make this more advanced and dynamic



## Setup

1. create a project with a folder called `app`, a file called `.flaskenv` and a file called `.env` at the root.
2. in the `app` directory, create two files:
    - __init__.py
    - config.py

3. in the `app` directory, create 2 sub directories:
    - forms
    - templates (make sure this is plural)

4. in `.env` add:
    ```
    SECRET_KEY=<strong key>
    ```
5. in `.flaskenv` add:

    ```
    FLASK_APP=app
    FLASK_DEBUG=True
    ```
6. In `app`:
    - import Flask from flask, create a new instance of Flask to a variabled called "app", make sure to pass in "__name__" as a constructor argument to Flask
    - attach your config to your app
    - create a route:
        - use decorators for urls and methods
        - create a function that can return functionality and HTML
        - remember to import from Flask, and use `redirect` and `render_template`

/app/__init__.py
```py

from flask import Flask, render_template, redirect
from .config import Config

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

```

7. In config.py:
    - Import os
    - create a class called Config inheriting from object
    - grab you variables you want to set for flask

/app/config.py
```py
import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY')

```

8. in the /app/templates folder:
    - add any html files you want to render
    - you can use Jinja2 (defaulted in flask import) to render content with python
        - TIPS:
        - two curlies -> variables (keying into variables/objects, invoking functions, csrf)
        - 1 curly -> python (for loop, if blocks)



## Additional Flask Items

### WTForms
Now that we can build a very basic Flask application, it is time to utilize forms.
Make sure to install `flask-wtf`.

In the /app/forms directory, make a new file for a form.

1. Make sure to import:
    - FlaskForm from flask-wtf
    - html fields from wtforms
    - validators from wtfforms.validators
2. Make a class for a form that takes in your FlaskForm
3. create a variables instanced to the htmlfields invoked, passing in any labels and validators


In the /app/__init__ file:

1. make sure to import any forms
2. you can create a new instance of the form
3. use forms built in `validate_on_submit()` method to check to see if you have good data in frontend
4. use `form.data[<label>]` to key into form and grab items
5. use `form.errors` to return or check for any errors


### Jinja

Jinja is built into the flask framework, and allows us to use templating to inject Python into HTML

Examples:

```py
from flask import Flask, render_tempate
from .forms import PersonForm
#... Flask set up code
names = ["bob", "bill", "jane"]

@app.route("/")
def index():
    form = PersonForm()
    return render_template("index.html", names=names, form=form)
```

index.html:

```html
{% for name in names %}
<div>
    <span>{{name}}</span>
</div>
{% endfor %}

<div>
    <h1>Enter your name</h1>
    <div class="input-form">
        <form>
            {{ form.name.label }}
            {{ form.name() }}
        </form>
    </div>
</div>
```

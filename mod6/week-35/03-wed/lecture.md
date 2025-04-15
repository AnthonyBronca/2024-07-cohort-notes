# Flask II

## Topics


### Data validations

We can use Data validations by using forms in flask-wtf.
Data validations come from the combination of packages from wtforms and wtforms.validators. In a form route to validate that a user input their name and password, we can do something like this:

```py
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField,SubmitField
from wtforms.validators import DataRequired, Length

class SampleForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired(), Length(3,10)])
    password = PasswordField("Password", validators=[DataRequired(), Length(6, 12)])
    submit = SubmitField("Submit User")

```

Now, in our flask route we can validate this using: `.validate_on_submit`, which is a method on our flask instanced item.


```py
@app.route("/new_user", methods=["GET", "POST"])
def form():
    form = SampleForm()
    if form.validate_on_submit():
        names.append(form.data["name"])
        print(names)
        return redirect("/", 302)
    if form.errors:
        return form.errors

    return render_template("form.html", form=form)
```

Here, we can also pull the data out of our form, and use it if all the validations were passed. We can also use `form.errors` to check which errors were present, and return them as needed to the frontend



### POST Routes

In the example above, you'll notice a slight change in the route. We are using methods=['GET', 'POST']. This is a cool feature of flask. We can have one route handle our GET and our POST! This is especially useful for forms, where you may want to GET the form to display, and then POST it when all the validations pass.

We will want to make sure to update our HTML a bit to accomodate a post:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Form</title>
</head>
<body>
    <H1>Sample Form</H1>
    <form action="/forms/new_user" method="POST" >
        {{form.csrf_token}}
        {{form.hidden_tag()}}
        <span>
            {{form.name.label}}
        </span>
        {{form.name()}}
        <span>
            {{form.password.label}}
        </span>
        {{form.password()}}
        <span>
            {{form.submit.label}}
        </span>
        {{form.submit()}}
    </form>
</body>
</html>

```

notice how we need to pass in a csrf_token to get this POST to work. We also need to specify the action of which route this POST form will hit (for us that is /forms/new_user). This will successfully hit our route, check our validations, and then run any functions we may need to do. For us, that is redirecting back to home.


### Blueprints

No one wants to have 100 routes in one file lol.

Enter blueprints! We can use blueprints to divide our routes into different files:

1. delcare a routes folder
2. make sure to have a __init__.py file
3. create a file for your new routes

You can then import BluePrint from flask, and utilize them to replace the need to use `app`. You can also use them to add prefixes. Remember using `/api/users/:id`

A blueprint can look like:

```py
from flask import Blueprint, redirect, render_template
from app.forms import SampleForm
from app.data import names

bp = Blueprint("form", __name__, url_prefix="/forms")


@bp.route("/new_user", methods=["GET", "POST"])
def form():
    form = SampleForm()
    if form.validate_on_submit():
        names.append(form.data["name"])
        print(names)
        return redirect("/", 302)
    if form.errors:
        return form.errors

    return render_template("form.html", form=form)
```

This will prefix our routes with /forms, and then we can use this route. However, first we need to hook it up to our app.
4. Back in your __init__.py, don't forget to import and use the new blueprint!
```py
from flask import Flask, render_template, redirect
from app.config import Config
from app import routes

app = Flask(__name__)
app.config.from_object(Config)

app.register_blueprint(routes.main.bp)
app.register_blueprint(routes.forms.bp)

```

### Routes with params

We can use angle brackets in our routes to handle parameters, like a user's id.

```py
@bp.route("/users/<id:int>",)
def user(id):

    return render_template("user_profile.html")
```

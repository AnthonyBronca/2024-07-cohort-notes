# imports
from flask import Flask, render_template, redirect
from .config import Config
from .forms import SimpleForm

# Set up
app = Flask(__name__)
app.config.from_object(Config)

names_list = ["Anthony", "Sam", "Alexi", "Marlon"]


# route
@app.route("/")
def home():
    # Dynamic Variables for Jinja
    site_info = {
        "title": "Flask + Jinja",
        "header": "Welcome to Jinja2, it's ugly, but easy to use I guess",
        "names": names_list,
    }

    return render_template("index.html", site_info=site_info)


# A route to post
@app.route("/forms", methods=["GET", "POST"])
def add_user():
    # create a new instance of the form
    form = SimpleForm()
    # WHEN POSTING, WE WANT TO VALIDATE
    if form.validate_on_submit():
        print(form.data)
        names_list.append(form.data["name"])
        return redirect("/")

    return render_template("form.html", form=form)

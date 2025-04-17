# IMPORTS
from flask import Flask, render_template, redirect
from .config import Config
from .forms import SimpleForm

# SET UP
app = Flask(__name__)
app.config.from_object(Config)

names_list = ["Anthony", "Sam", "Alexi", "Marlon"]


# ROUTES
@app.route("/")
def home():

    site_info = {
        "title": "Flask + Jinja",
        "header": "Flask and Jinja are easy, but kinda ugly I guess",
        "names": names_list,
    }

    return render_template("index.html", site_info=site_info)


# Post
@app.route("/forms", methods=["GET", "POST"])
def add_new_person():
    # create a new instance of the form
    form = SimpleForm()

    # when posting
    if form.validate_on_submit():
        names_list.append(form.data["name"])
        return redirect("/")

    # when getting
    return render_template("form.html", form=form)

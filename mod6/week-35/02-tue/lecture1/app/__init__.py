# Imports
# const express = require("express"); -- js

from flask import Flask, render_template
from .config import Config
from .posts import posts

# Setup


# js - const app = express();
app = Flask(__name__)
# hook up the configurations to our app
app.config.from_object(Config)


# Routes

"""
JS -
app.get('/', req, res, next, ()=> {
return <h1>hi</h1>
})


"""


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/all")
def get_data():
    return render_template("feed.html", posts=posts)


@app.route("/<int:id>")
def get_one(id):
    one_post = [post for post in posts if post["id"] == id]
    print(one_post)
    return render_template("feed.html", posts=one_post)

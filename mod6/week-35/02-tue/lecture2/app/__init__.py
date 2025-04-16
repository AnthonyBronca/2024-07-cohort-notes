# IMPORTS
# - JS -> const express = require('express');
from flask import Flask, render_template
from .config import Config
from .posts import posts


# SETUP
# -- js -> const app = express();
app = Flask(__name__)
# Plug in configuration
app.config.from_object(Config)


# ROUTES
"""
--- js ---

app.get("/", async(req, res, next)=> {
    return "<h1>hello world</h1>"
})


"""


@app.route("/")
def main():
    return "<h1>Welcome to our app</h1>"


@app.route("/home")
def home():
    return render_template("index.html")


# get all
@app.route("/feed")
def feed():
    return render_template("feed.html", posts=posts)


# get one
@app.route("/<int:id>")
def get_one(id):
    one_post = [post for post in posts if post["id"] == id]
    return render_template("feed.html", posts=one_post)

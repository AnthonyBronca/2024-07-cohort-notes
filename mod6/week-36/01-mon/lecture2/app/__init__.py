# imports
from flask import Flask, render_template
from .config import Config
from .models import db, User, Tweet, Tweet_Image
from flask_migrate import Migrate

# set up
app = Flask(__name__)
app.config.from_object(Config)
# sql alchemy
db.init_app(app)
# alembic
Migrate(app, db)
# routes


@app.route("/")
def index():
    tweets = Tweet.query.all()

    return render_template("index.html", tweets=tweets)


# @app.route("/")
# def index():
#     q = db.session.query(Tweet, User).join(User).all()

#     tweet_res = []

#     for data in q:
#         tweet = data[0].body
#         user = data[1].name
#         tweet_res.append({"tweet": tweet, "author": user})

#     print(tweet_res)
#     return render_template("index.html", tweets=tweet_res)

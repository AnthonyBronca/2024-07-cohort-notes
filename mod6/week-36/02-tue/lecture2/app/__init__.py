# imports
from flask import Flask, render_template
from .config import Config
from flask_migrate import Migrate
from .models import db, User, Tweet

# set up
app = Flask(__name__)
app.config.from_object(Config)
# hook up our models (database)
db.init_app(app)
# automatically create migrations
Migrate(app, db)

# routes


@app.route("/")
def index():
    # tweets = Tweet.query.all()
    query = db.session.query(Tweet, User).join(User).all()
    for q in query:
        tweet = q[0]
        user = q[1]
        print(f"{user.name} tweeted: {tweet.body}")

    return render_template("index.html", query=query)

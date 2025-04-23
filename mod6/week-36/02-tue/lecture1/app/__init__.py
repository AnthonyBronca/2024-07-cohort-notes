# imports
from flask import Flask, render_template
from .config import Config
from .models import db, User, Tweet

# create migrations
from flask_migrate import Migrate


#  set up
app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

# set up migrations to be automatic
Migrate(app, db)


# routes
@app.route("/")
def index():
    # query the Tweet table, and get ONLY Tweet content
    # query = Tweet.query.all()

    # Query both the Tweet AND the associated User table
    query = db.session.query(Tweet, User).join(User).all()

    print(query)
    for q in query:
        tweet = q[0]
        user = q[1]
        print(f"{tweet.body} was posted by {user.name}")
        # print(user)
    tweets = [
        {
            "body": "hi",
        },
        {
            "body": "bye",
        },
    ]
    return render_template("index.html", tweets=tweets)

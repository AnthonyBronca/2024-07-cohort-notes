# imports
from flask import Flask, render_template
from .config import Config
from .models import db, User, Tweet, Tweet_Image
from flask_migrate import Migrate

# setup
app = Flask(__name__)
app.config.from_object(Config)

# hook up our application to our database
db.init_app(app)

# --- MIGRATIONS: ALLOW US TO RUN SQL COMMANDS TO CREATE THE DATABASE ITEMS ----
Migrate(app, db)


# # routes - find all
# @app.route("/")
# def index():
#     # hardcoding data -> database
#     # tweet = "whatever i want"
#     tweets = Tweet.query.all()
#     return render_template("index.html", tweets=tweets)


@app.route("/")
def index():
    tweets = db.session.query(Tweet, User).join(User).all()

    print(tweets)
    return render_template("index.html", tweets=tweets)

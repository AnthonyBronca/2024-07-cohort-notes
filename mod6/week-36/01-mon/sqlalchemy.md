# SQLAlchemy


We have touched on the basics of establishing a SQLAlchemy ORM connection with our Flask Application. We can use SQLALchemy to manage our models, and thus also manage our queries. Let's review some of the basics of setting up a model:


## Model Set Up

We can create a models.py file and store all of our models in that one db, or we can create multiple files to manage these models. For the purpose of learning, we will stick with having our models in one file, but we will learn to work with multiple files during the group project.



In our App/models.py file we can create a basic User model like so:

```py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy() # Establish a database

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    is_admin = db.Column(db.Boolean, nullable=False)

```

Notice that we can instantiate our db with SQLAlchemy, and then we have to pass that in to our User class so it can inherit sqlalchemy.
Once it is connected, we can then use db.Column, and db.Types like Integer, Boolean, String, etc. Optionally, we can pass in a nullable field if we want to make this column nullable or not. In this example, everything is required to be passed in on creation. Additionally, notice that our id, is set to be the primary_key. This means we do not have to worry about passing it in on creation, and it will default to auto-increment
Lastly, notice we have to use a __tablename__ and set it to be the *PLURAL* lowercase version of the *SINGULAR* User class name. This will be needed when w start adding relationships.


To finish our setup, make sure to connect our database to our app.

in App/__init__.py:

```py
from flask import Flask, render_template
from .config import Config
from .models import db, User


app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
```

The line `db.init_app(app)` is what lets us connect our database to our flask app.


## Relationships

We can now add additioanl models to our `app/models.py` file, so that we can create some relationships. For this example, we wil be using Twitter.

A User has many Tweets
A Tweet has many tweet_images
A Tweet belongs to a User
A Tweet_Image belongs to a tweet

The first thing to notice, is that we need to make sure what inherits what. In this case, a tweet will inherit a user.id.  Therefore, it will need inherit this using the `db.ForeignKey` function.


```py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


# One user, many posts
# one post, many images


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)



class Tweet(db.Model):
    __tablename__ = "tweets"

    id = db.Column(db.Integer, primary_key=True)
    tweet_content = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))


class Tweet_Image(db.Model):
    __tablename__ = "tweet_images"

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(1000), nullable=False)

    tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"))
```

Notice that we reference the ForeignKey by referencing the __tablename__, and then we key into the variable of the column we want to inherit from. In this example, Tweet has a column called user_id, which is the inheritiance of the User.id column from the User table.


Before we go on to queries, let's add some additional querying relationship handling using `db.relation()` and `back_populates`. These allow us to declare what type of relationship we will have with each table in our db, and it will also allow us to also include other tables with a query. So example: Include the User that belongs to a Tweet.

While we do not NEED to do back_poplates for every relationship, it can help depending on your query needs. Keep in mind, if you don't need a bi-lateral query it may take up more space in your database to include it, but by including it we can also make queries more efficient and better avoid n+1 queries.


Let's adjust our models now to include these relationships:

```py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


# One user, many posts
# one post, many images
# many-to-many user and post through likes


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)

    tweets = db.relationship("Tweet", back_populates="user")


class Tweet(db.Model):
    __tablename__ = "tweets"

    id = db.Column(db.Integer, primary_key=True)
    tweet_content = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    user = db.relationship("User", back_populates="tweets")
    tweet_images = db.relationship("Tweet_Image", back_populates="tweet")


class Tweet_Image(db.Model):
    __tablename__ = "tweet_images"

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(1000), nullable=False)

    tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"))

    tweet = db.relationship("Tweet", back_populates="tweet_images")


```

The db.relationship is not needed for the queries, so you could create just the relationship with ForeignKey, but you will be limited on the type of queries you can do.

Notice that our User has a tweets column. While a User table does not have a tweets column, unlike the Tweet class having a user_id column, we can establish a `bi-lateral` relationship meaning when we query a User we can include all the tweets that belong to that user, and vice versa. This still remains a One-to-Many relationship as only the Tweet has the ForeignKey


Now, we could start doing some queries to grab a Tweet, so say something like this in a route:

```py
@app.route("/")
def index():
    tweets = Tweet.query.all()
    return render_template("index.html", tweets=tweets)

```

Here we are quering all tweets, and will get a response that looks like:

```
[<Tweet 1>, <Tweet 2>, <Tweet 3>]
```

We could grab all the content of this tweet by iterating through:

```py
@app.route("/")
def index():
    tweets = Tweet.query.all()
    print(tweets) # [<Tweet 1>, <Tweet 2>, <Tweet 3>]
    for tweet in tweets:
        print(tweet.tweet_content) # Test Test2 Test3
    return render_template("index.html", tweets=tweets)
```

So what if we want to query 1 item?

```py
@app.route("/")
def index():
    tweet_id = 2
    tweet = Tweet.query.get(tweet_id)
    print(tweet) # <Tweet 2>
    return render_template("index.html", tweet=tweet)

```

Alright, so we can do some very basic queries, but what about if I want to filter by all Tweets that belong to user 2?

```py

@app.route("/")
def index():
    tweets = Tweet.query.filter_by(user_id=2).all()
    print(tweets)
    for tweet in tweets:
        print(
            tweet.tweet_content,
        )
    return render_template("index.html", tweets=tweets)

```

Or if I want to query all the Users that start with the letter A?

```py
@app.route("/")
def index():
    users = User.query.filter(User.name.like("A%")).all()
    print(users)
    return render_template("index.html", users=users)
```

What if I want to include people that start with "a" or "A"?


```py
@app.route("/")
def index():
    users = User.query.filter(User.name.ilike("A%")).all()
    print(users)
    return render_template("index.html", users=users)
```

and lastly, what if I want to query all tweets, and include their users

```py
@app.route("/")
def index():
    tweets = db.session.query(Tweet, User).join(User).all()
    print(tweets) # [(<Tweet 1>, <User 1>), (<Tweet 3>, <User 2>), (<Tweet 2>, <User 2>)]

    return render_template("index.html", tweets=tweets)
```


We will learn how to jsonify this and send it to frontend as a nice Object later!
Additionally, we will later learn how to create migrations and seeders when we get to Alembic!

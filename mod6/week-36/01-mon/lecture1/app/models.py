# imports
from flask_sqlalchemy import SQLAlchemy


# create a database
db = SQLAlchemy()


# models
class User(db.Model):
    # give it a name, for reference in our relationships
    __tablename__ = "users"

    # name | data type  | other attributes
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    profile_img = db.Column(db.String(1000), nullable=True)

    # relationship
    tweets = db.relationship("Tweet", back_populates="user")


class Tweet(db.Model):
    __tablename__ = "tweets"

    # name | data type  | other attributes
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(255), nullable=False)
    # relationship - foreign key
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    # relationship
    user = db.relationship("User", back_populates="tweets")


class Tweet_Image(db.Model):
    __tablename__ = "tweet_images"

    # name | data type  | other attributes
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(1000))

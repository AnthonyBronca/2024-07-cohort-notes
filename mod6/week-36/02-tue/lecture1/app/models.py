from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)

    # relationship
    tweets = db.relationship("Tweet", back_populates="user")


class Tweet(db.Model):
    __tablename__ = "tweets"

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(250), nullable=False)

    # foreign key
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    # relationship
    user = db.relationship("User", back_populates="tweets")

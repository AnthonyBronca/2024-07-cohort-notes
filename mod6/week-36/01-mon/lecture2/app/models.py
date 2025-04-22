from flask_sqlalchemy import SQLAlchemy


# Creates an instance of our database
db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"
    # column name | data type | attributes
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    profile_img_url = db.Column(db.String(1000), nullable=True)

    # relatiopnships
    tweets = db.relationship("Tweet", back_populates="user")


class Tweet(db.Model):
    __tablename__ = "tweets"

    # column name | data type | attributes
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(250), nullable=True)

    # create a foreign key
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    # relationship
    user = db.relationship("User", back_populates="tweets")


class Tweet_Image(db.Model):
    __tablename__ = "tweet_images"

    # column name | data type | attributes
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(1000))

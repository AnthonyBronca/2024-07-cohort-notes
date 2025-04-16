# process.env.SECRET_KEY -js
import os

print(os.environ.get("SECRET_KEY"), "what is this")


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")

# import -> the way to grab our environment variables
import os


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")

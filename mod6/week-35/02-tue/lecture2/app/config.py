# in js ->  process.env.SECRET_KEY

import os


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")

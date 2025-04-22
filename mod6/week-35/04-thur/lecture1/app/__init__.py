# imports
from flask import Flask
from .config import Config
from .routes import main

# set up
app = Flask(__name__)
app.config.from_object(Config)
# set up routes
app.register_blueprint(main.bp)

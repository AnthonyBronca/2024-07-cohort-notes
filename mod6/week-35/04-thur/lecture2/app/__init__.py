# imports
from flask import Flask, render_template
from .config import Config
from .routes import main, reviews

# set up
app = Flask(__name__)
app.config.from_object(Config)
# routes setup
app.register_blueprint(main.bp)
app.register_blueprint(reviews.bp)

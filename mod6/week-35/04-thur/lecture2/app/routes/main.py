from flask import Blueprint, render_template

# app = Flask(__name__)

bp = Blueprint("main", __name__)


# routes
@bp.route("/")
def home():
    title = "Welcome class ☺️"
    students = ["rashid", "raina", "mikaela", "cayden", "steph"]
    return render_template("index.html", header=title, students=students)

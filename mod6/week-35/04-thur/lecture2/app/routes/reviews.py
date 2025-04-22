from flask import Blueprint, render_template

# app = Flask(__name__)

bp = Blueprint("reviews", __name__)


# routes
@bp.route("/test")
def home():
    title = "Bye class ☺️"
    students = ["rashid", "raina", "mikaela", "cayden", "steph"]
    return render_template("index.html", header=title, students=students)

from flask import Blueprint, render_template

# app = Flask(__name__)
bp = Blueprint("main", __name__)


@bp.route("/")
def home():
    title_name = "Hello class ☺️"
    students = ["tallha", "harold", "seyma"]
    return render_template("index.html", title=title_name, students=students)

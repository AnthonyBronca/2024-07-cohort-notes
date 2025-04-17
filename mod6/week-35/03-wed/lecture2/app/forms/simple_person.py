from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, DateField, SubmitField
from wtforms.validators import DataRequired, Length


# inherit the FLASK FORM
class SimpleForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired(), Length(2, 50)])
    password = PasswordField("Password", validators=[DataRequired(), Length(8, 10)])
    birth_date = DateField("Birth Day")
    submit = SubmitField("Sign Up")

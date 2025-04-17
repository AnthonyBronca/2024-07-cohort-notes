from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField, PasswordField
from wtforms.validators import DataRequired, Length


# MAKE SURE TO PASS IN YOUR FLASK FORM
class SimpleForm(FlaskForm):
    name = StringField("name", validators=[DataRequired(), Length(2, 50)])
    password = PasswordField("password", validators=[DataRequired(), Length(8, 10)])
    submit = SubmitField("Submit")

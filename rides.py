from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Rides(db.Model):
    rides_id = db.Column(db.Integer, primary_key=True)
    from_location = db.Column(db.String(100), nullable=False)
    to_location = db.Column(db.String(100), nullable=False)
    date = db.Column(db.Date, nullable=False)
    notes = db.Column(db.Text)

# Initialize the database
db.create_all()
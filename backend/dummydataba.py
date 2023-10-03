from faker import Faker
from model import db, Employee, Admin, Attendance
import random
from datetime import datetime, timedelta
from flask import Flask

fake = Faker()

# Create a Flask app instance
app = Flask(__name__)

# Configure the Flask app and SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///databases.db'  # Replace with your database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the SQLAlchemy database with the Flask app
db.init_app(app)

# Function to populate the Employee model with dummy data
def populate_employee_data(num_records):
    with app.app_context():
        for _ in range(num_records):
            employee = Employee(
                employee_id=fake.unique.random_number(digits=6),
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                email=fake.unique.email(),
                department=fake.random_element(elements=('HR', 'IT', 'Finance', 'Sales')),
                password=fake.password(),
            )
            db.session.add(employee)
        db.session.commit()

# Function to populate the Admin model with dummy data
def populate_admin_data(num_records):
    with app.app_context():
        for _ in range(num_records):
            admin = Admin(
                admin_id=fake.unique.random_number(digits=6),
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                email=fake.unique.email(),
                password=fake.password(),
            )
            db.session.add(admin)
        db.session.commit()

# Function to populate the Attendance model with dummy data
def populate_attendance_data(num_records):
    with app.app_context():
        for _ in range(num_records):
            employee_id = random.randint(1, num_records)  # Randomly select an employee_id
            time_in = fake.date_time_between(start_date="-30d", end_date="now")  # Random date within the last 30 days
            attendance = Attendance(
                employee_id=employee_id,
                time_in=time_in,
            )
            db.session.add(attendance)
        db.session.commit()

if __name__ == '__main__':
    # Specify the number of dummy records to create for each table
    num_employee_records = 10
    num_admin_records = 5
    num_attendance_records = 50

    # Call the functions to populate each table with dummy data
    populate_employee_data(num_employee_records)
    populate_admin_data(num_admin_records)
    populate_attendance_data(num_attendance_records)

from flask_sqlalchemy import SQLAlchemy

# Create a SQLAlchemy instance with custom metadata
db = SQLAlchemy()

class Employee(db.Model):
    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.String, unique=True, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    department = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    

    def __repr__(self):
        return f'<Employee {self.first_name} {self.last_name}>'

class Admin(db.Model):
    __tablename__ = 'admins'

    id = db.Column(db.Integer, primary_key=True)
    admin_id = db.Column(db.String, unique=True, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'<Admin {self.first_name} {self.last_name}>'

class Attendance(db.Model):
    __tablename__ = 'attendance'

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.Integer, db.ForeignKey('employees.id'), nullable=False)
    time_in = db.Column(db.String)

    employee = db.relationship('Employee', backref='attendances')

    def __repr__(self):
        return f'<Attendance for Employee {self.employee_id}>'




from flask import Flask, request, jsonify,  Blueprint
# from flask_migrate import Migrate
from model import db , Employee, Admin, Attendance
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity

# Create a Blueprint for your routes
app = Blueprint('routes', __name__)



# Create a function to authenticate employees
def authenticate_employee(employee_id, password):
    employee = Employee.query.filter_by(employee_id=employee_id).first()
    if employee and employee.password == password:
        return employee


# Create a function to authenticate admins
def authenticate_admin(admin_id, password):
    admin = Admin.query.filter_by(admin_id=admin_id).first()
    if admin and admin.password == password:
        return admin


# Create an API route for employee login
@app.route('/employee/login', methods=['POST'])
def employee_login():
    data = request.get_json()
    employee_id = data.get('employee_id')
    password = data.get('password')

    employee = authenticate_employee(employee_id, password)

    if employee:
        access_token = create_access_token(identity=employee_id)
        return jsonify({"access_token": access_token}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401


# Create an API route for admin login
@app.route('/admin/login', methods=['POST'])
def admin_login():
    data = request.get_json()
    admin_id = data.get('admin_id')
    password = data.get('password')

    admin = authenticate_admin(admin_id, password)

    if admin:
        access_token = create_access_token(identity=admin_id)
        return jsonify({"access_token": access_token}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401


# Create an API route to update attendance
@app.route('/attendance/update', methods=['POST'])
@jwt_required()
def update_attendance():
    current_employee_id = get_jwt_identity()
    data = request.get_json()
    employee_id = data.get('employee_id')
    time_in = data.get('time_in')

    if current_employee_id != employee_id:
        return jsonify({"message": "You are not authorized to update this attendance"}), 401

    # Perform the update in the Attendance table
    attendance = Attendance(employee_id=employee_id, time_in=time_in)
    db.session.add(attendance)
    db.session.commit()

    return jsonify({"message": "Attendance updated successfully"}), 200


# Create an API route to get attendance records
@app.route('/attendance/records/<employee_id>', methods=['GET'])
@jwt_required()
def get_attendance_records(employee_id):
    current_employee_id = get_jwt_identity()

    if current_employee_id != employee_id:
        return jsonify({"message": "You are not authorized to access these records"}), 401

    # Retrieve attendance records for the specified employee
    attendance_records = Attendance.query.filter_by(employee_id=employee_id).all()

    # Serialize the records using SerializerMixin
    serialized_records = [record.to_dict() for record in attendance_records]

    return jsonify(serialized_records), 200

if __name__ == '__main__':
    app.run(port=5555, debug=True)

from flask import Blueprint, jsonify
# from models.user_data import get_stats

courses_bp = Blueprint('dashboard', __name__)

@courses_bp.route('/generate', methods=['POST'])
def stats(person):
    print("pesr",person)
    return jsonify(person)

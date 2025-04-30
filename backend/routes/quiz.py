from flask import Blueprint, request, jsonify
from services.ollama_client import generate_quiz
# from models.user_data import save_quiz

quiz_bp = Blueprint('quiz', __name__)

@quiz_bp.route('/generate', methods=['POST'])
def generate():
    data = request.json
    topic = data.get('topic', 'general knowledge')
    level = data.get('level', 'beginner')
    result = generate_quiz(topic, level)
    # save_quiz(topic, level, result)
    return jsonify({'quiz': result})

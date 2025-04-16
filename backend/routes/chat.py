from flask import Blueprint, request, jsonify
from services.ollama_client import ask_question

chat_bp = Blueprint('chat', __name__)

@chat_bp.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get('question')
    if not question:
        return {'error': 'Question is required'}, 400
    response = ask_question(question)
    return jsonify({'answer': response})

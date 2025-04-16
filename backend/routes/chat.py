from flask import Blueprint, request, jsonify
from services.ollama_client import ask_question

chat_bp = Blueprint('chat', __name__)

@chat_bp.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get('question')
    savequestion = data.get('savequestion')
    print("save",savequestion)
    if not question:
        return {'error': 'Question is required'}, 400
    response = ask_question(question,savequestion)
    return jsonify({'answer': response})

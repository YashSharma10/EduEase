from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.quiz import quiz_bp
from routes.chat import chat_bp
from routes.dashboard import dashboard_bp
from routes.courses import courses_bp

app = Flask(__name__)
# CORS(app)
CORS(app)


app.register_blueprint(quiz_bp, url_prefix='/api/quiz')
app.register_blueprint(chat_bp, url_prefix='/api/chat')
app.register_blueprint(dashboard_bp, url_prefix='/api/dashboard')
# app.register_blueprint(courses_bp, url_prefix='/api/courses')

import requests
import json
@app.route('/api/serper/search', methods=['GET'])
def courses():
    query = request.args.get("q")
    topic = request.args.get("newParam")
    print("topic", topic)

    if not query:
        return jsonify({"error": "Missing query param"}), 400

    try:
        person = json.loads(query)
        selected_data = {
            "classGrade": person.get("classGrade"),
            "learningStyle": person.get("learningStyle"),
            "learningPace": person.get("learningPace"),
        }

        queary = f'show me courses on {topic} for {selected_data["classGrade"]} and i am {selected_data["learningStyle"]} learner and my learning pace is {selected_data["learningPace"]} '
        print(queary)
        url = "https://google.serper.dev/images"

        payload = json.dumps({
        "q": f"{queary}",
        "gl": "in"
        })
        headers = {
        'X-API-KEY': '3d70037d6b7ca654ffaaf0374eb56caacdb52c68',
        'Content-Type': 'application/json'
        }

        response = requests.post(url, headers=headers, data=payload)
        response.raise_for_status()
        data = response.json()
        print(data)
        # print("Serper data:", json.dumps(data, indent=2))
        return data

    except Exception as e:
        print("Error parsing JSON:", e)
        return jsonify({"error": "Invalid JSON"}), 400
    
@app.route('/')
def home():
    return {'message': 'AI Quiz Backend is running'}

if __name__ == '__main__':
    app.run(debug=True,port=5001)

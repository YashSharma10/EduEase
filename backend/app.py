from flask import Flask
from flask_cors import CORS
from routes.quiz import quiz_bp
from routes.chat import chat_bp
from routes.dashboard import dashboard_bp

app = Flask(__name__)
# CORS(app)
CORS(app)


app.register_blueprint(quiz_bp, url_prefix='/api/quiz')
app.register_blueprint(chat_bp, url_prefix='/api/chat')
app.register_blueprint(dashboard_bp, url_prefix='/api/dashboard')

@app.route('/')
def home():
    return {'message': 'AI Quiz Backend is running'}

if __name__ == '__main__':
    app.run(debug=True,port=5001)

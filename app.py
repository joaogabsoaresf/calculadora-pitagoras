from flask import Flask, request, Response
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})

@app.route('/', methods=['GET'])
def index():
    return 'Hello World'

@app.route('/calcula', methods=['POST'])
def calcula():
    return 'Conta Feita'

if __name__ == '__main__':
    app.run(debug=True)
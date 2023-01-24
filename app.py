from flask import Flask, request
from flask_cors import CORS
from src import Calculo
app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})

@app.route('/', methods=['GET'])
def index():
    return 'Hello World'

@app.route('/calcula', methods=['POST'])
def calcula():
    hipotenusa = request.json.get('hipotenusa')
    cateto1 = request.json.get('cateto1')
    cateto2 = request.json.get('cateto2')

    calculo = Calculo.Calculo(
        hipotenusa = hipotenusa,
        cateto1 = cateto1,
        cateto2 = cateto2
        )
    
    return calculo.pegar_retorno()

if __name__ == '__main__':
    app.run(debug=True)
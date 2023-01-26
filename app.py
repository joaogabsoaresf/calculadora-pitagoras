from flask import Flask, request, render_template
from flask_cors import CORS
from src import Calculo
app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', methods=['GET'])
def index():
    return 'Hello World'

@app.route('/calcula', methods=['POST'])
def calcula():

    print(request.json)

    print(type(request.json['hipotenusa']))
    print(type(request.json['cateto1']))
    print(type(request.json['cateto2']))

    return 'OK'

    # calculo = Calculo.Calculo(
    #     hipotenusa = request.json.get('hipotenusa'),
    #     cateto1 = request.json.get('cateto1'),
    #     cateto2 = request.json.get('cateto2')
    #     )
    
    # print(vars(calculo))
    
    # return calculo.pegar_retorno()

if __name__ == '__main__':
    app.run(debug=True)
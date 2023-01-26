from flask import Flask, request, render_template
from flask_cors import CORS
from src import Calculo
app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/', methods=['GET'])
def index():
    """
    Rota principal da aplicação. Retorna a string 'Hello World' quando acessada via método GET.
    """
    return 'Hello World'

@app.route('/calcula', methods=['POST'])
def calcula():
    """
    Esta função é chamada quando a rota '/calcula' é acessada via método POST.
    Recebe os valores de hipotenusa, cateto1 e cateto2 via requisição JSON e realiza um cálculo
    utilizando a classe Calculo. Em seguida, retorna o resultado do cálculo.
    """

    print(request.json)

    calculo = Calculo.Calculo(
        hipotenusa = request.json.get('hipotenusa'),
        cateto1 = request.json.get('cateto1'),
        cateto2 = request.json.get('cateto2')
        )
    
    print(vars(calculo))
    
    return calculo.pegar_retorno()

if __name__ == '__main__':
    app.run(debug=True)
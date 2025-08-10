from services import deletar_remedio, adicionar_remedio, listar_remedios, atualizar_remedio
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

medicamentos = []
@app.route('/api/remedios', methods = ['GET','POST'])
def cadastrar_remedio():
    if request.method == 'GET':
        return jsonify(listar_remedios()), 200
        
    elif request.method == 'POST':
        data = request.get_json()

        nome = data.get("nome")
        quantidade = data.get("quantidade")
        validade = data.get("validade")

        if not nome or not quantidade or not validade:
            return jsonify({"erro":"Todos os campos são obrigatórios"}),400

        novo_remedio={
            "nome":nome,
            "quantidade":quantidade,
            "validade":validade
        }

        medicamentos.append(novo_remedio)

        adicionar_remedio(nome = nome, validade = validade, qntd = quantidade)

        return jsonify({"mensagem":"Remedio cadastrado com sucesso", "remedio":"novo_remedio"}),201

if __name__ == '__main__':
    app.run(debug=True)
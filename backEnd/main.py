from services import deletar_remedio, adicionar_remedio
from flask import Flask, request, jsonify
from flask_cors import CORS
from login import login
 
app = Flask(__name__)
CORS(app)

medicamentos=[]

@app.route('/api/remedios',methods=['POST'])
def cadastrar_remedio():
    data=request.get_json()

    nome=data.get("nome")
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

    adicionar_remedio(nome=nome,validade=validade,qntd=quantidade)

    return jsonify({"mensagem":"Remedio cadastrado com sucesso", "remedio":"novo_remedio"}),201

if __name__=='__main__':
    app.run(debug=True)
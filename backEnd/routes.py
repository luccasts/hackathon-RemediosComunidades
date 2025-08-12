from flask import jsonify, request
from models import Remedio, db
from services import listar_remedios, adicionar_remedio, deletar_remedio, atualizar_remedio


def registrar_rotas(app):
  @app.route('/api/remedios', methods = ['GET','POST'])
  def cadastrar_remedio():
      if request.method == 'GET':
          dados = [
            {
                  "id": r.id,
                  "nome": r.nome,
                  "quantidade": r.qntd,
                  "validade": r.validade,
                  "aviso": r.aviso
              }
          for r in listar_remedios()
          ]
          return jsonify(dados), 200
          
      elif request.method == 'POST':
          data = request.get_json()
          novo = adicionar_remedio(
            nome = data.get("nome"),
            quantidade = data.get("quantidade"),
            validade = data.get("validade")
          )
          return jsonify({
            "mensagem":"Remedio adicionado com sucesso",
            "id":novo.id
          }), 201
      
  @app.route("/api/remedios/<int:id>",methods=["DELETE", "PUT"])
  def alterar_deletar_remedio(id):
    if request.method == "DELETE":
      if deletar_remedio(id):
        return jsonify({"mensagem":"Remedio deletado com sucesso"}), 200
      return jsonify({"erro":"Remedio nao encontrado"}), 404
    
    elif request.method == "PUT":
      data = request.get.json()
      remedio = atualizar_remedio(
        id_remedio=id,
        nome=data.get("nome"),
        validade=data.get("validade"),
        qntd=data.get("quantidade"),
      )
      if remedio:
        return jsonify({
        "mensagem": "Remédio atualizado com sucesso",
        "remedio": {
          "id":remedio.id,
          "nome":remedio.nome,
          "quantidade":remedio.qntd,
          "validade":remedio.validade,
          "aviso":remedio.aviso
        }
      }), 200
        
    return jsonify({"erro":"Remedio não encontrado"}), 404
      
        
      
    

from flask import jsonify, request
from models import Remedio, db
def registrar_rotas(app):
  @app.route('/api/remedios', methods = ['GET','POST'])
  def cadastrar_remedio():
      if request.method == 'GET':
          remedios_db = db.session.query(Remedio).all()
          
          lista_remedios = []
          
          for remedio in remedios_db:
              remedio_dict = {
                  "id": remedio.id,
                  "nome": remedio.nome,
                  "quantidade": remedio.qntd,
                  "validade": remedio.validade
              }
              lista_remedios.append(remedio_dict)
          return jsonify(lista_remedios), 200
          
      elif request.method == 'POST':
          data = request.get_json()

          nome = data.get("nome")
          quantidade = data.get("quantidade")
          validade = data.get("validade")

          if not nome or not quantidade or not validade:
              return jsonify({"erro":"Todos os campos são obrigatórios"}),400

          novo_remedio = Remedio(nome=nome,qntd=quantidade,validade=validade)
          db.session.add(novo_remedio)
          db.session.commit()

          return jsonify({"mensagem":"Remedio cadastrado com sucesso", "remedio":"novo_remedio"}),201
      
  @app.route("/api/remedios/<int:id>",methods=["DELETE"])

  def deletar_remedio(id):
      remedio_para_deletar = db.get_or_404(Remedio,id)

      db.session.delete(remedio_para_deletar)
      db.session.commit()
      
      return "", 204

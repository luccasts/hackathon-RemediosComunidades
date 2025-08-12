from models import Remedio, session, db
from flask import Flask, jsonify
from sqlalchemy import delete

def listar_remedios():
    remedios = Remedio.query.all()
    return remedios

def adicionar_remedio(nome, validade, qntd):

    novo = Remedio(nome=nome,validade=validade,qntd=qntd)
    db.session.add(novo)
    db.session.commit()
    return novo

def deletar_remedio(remedio_id):

    remedio = Remedio.query.get(remedio_id)
    if remedio:
        db.session.delete(remedio)
        db.session.commit()
        return True
    return False
  
def atualizar_remedio(id_remedio, nome,validade,qntd):
    remedio = Remedio.query.get(id_remedio)
    if not remedio:
        return None
    
    if nome is not None:
        remedio.nome = nome
    if validade is not None:
        remedio.validade = validade
    if qntd is not None:    
        remedio.qntd = qntd
        
    db.session.commit()
    return remedio


# def adicionar_usuario(nome, email, senha):

#     novo = Usuario(nome = nome, email = email, senha = senha)
#     session.add(novo)
#     session.commit()
    
#     print(f"usuario {nome} foi adicionado com o ID {novo.id}")

# def deletar_usuario(usuario_id):

#     usuario = session.get(usuario, usuario_id)
#     if usuario:
#         session.delete(usuario)
#         session.commit()

#         print(f"Dado com ID {usuario_id} foi deletado.")
#     else:
#         print(f"Nenhum Dado com o ID {usuario_id} foi encontrado")

from models import Usuario, Remedio, session
from flask import Flask, jsonify
from sqlalchemy import delete

def listar_remedios():
    remedios = session.query(Remedio).all()
    return remedios

def adicionar_remedio(nome, validade, qntd):

    novo = Remedio(nome=nome,validade=validade,qntd=qntd)
    session.add(novo)
    session.commit()
    
    print(f"Remedio {nome} foi adicionado com o ID {novo.id}")

def deletar_remedio(remedio_id):

    remedio = session.get(Remedio, remedio_id)
    if remedio:
        session.delete(remedio)
        session.commit()

        print(f"Dado com ID {remedio_id} foi deletado.")
    else:
        print(f"Nenhum Dado com o ID {remedio_id} foi encontrado")



def adicionar_usuario(nome, email, senha):

    novo = Usuario(nome=nome,email=email,senha=senha)
    session.add(novo)
    session.commit()
    
    print(f"usuario {nome} foi adicionado com o ID {novo.id}")

def deletar_usuario(usuario_id):

    usuario = session.get(usuario, usuario_id)
    if usuario:
        session.delete(usuario)
        session.commit()

        print(f"Dado com ID {usuario_id} foi deletado.")
    else:
        print(f"Nenhum Dado com o ID {usuario_id} foi encontrado")

import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import event
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()

def get_database_url():
    return os.getenv("DATA_URL", "sqlite:///banco.db")

class Remedio(db.Model):
    __tablename__ = "remedios"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(100), nullable=False)
    validade = db.Column(db.String(100), nullable=False)
    quantidade = db.Column("quantidade", db.Integer, nullable=False)
     
    def __repr__(self):
        return f"<Remedio(id={self.id}, nome='{self.nome}', validade='{self.validade}', quantidade={self.quantidade})>"
    
    
# class Usuario(Base):
#     __tablename__ = "usuarios"

#     id = Column("id", Integer, primary_key=True, autoincrement=True) 
#     nome =  Column("nome", String)
#     email = Column("email", String)
#     senha = Column("senha", String)

#     def __repr__(self):
#         return f"<Usuario(id={self.id}, nome='{self.nome}', email='{self.email}', senha={self.senha})>"




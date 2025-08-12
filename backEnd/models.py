from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import event

db = SQLAlchemy()
class Remedio(db.Model):
    __tablename__ = "remedios"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(100), nullable=False)
    validade = db.Column(db.String(100), nullable=False)
    qntd = db.Column("quantidade", db.Integer, nullable=False)
    aviso = db.Column(db.String(255), nullable=False)
        
    def __repr__(self):
        return f"<Remedio(id={self.id}, nome='{self.nome}', validade='{self.validade}', qntd={self.qntd})>"
    
limite_estoque = 5
    
def atualizar_aviso(mapper, connection, target):
    if target.qntd <= limite_estoque:
        target.aviso = "Estoque baixo"
    else:
        target.aviso = None
        
event.listen(Remedio, "before_insert", atualizar_aviso)    
event.listen(Remedio, "before_update", atualizar_aviso)    
    
# class Usuario(Base):
#     __tablename__ = "usuarios"

#     id = Column("id", Integer, primary_key=True, autoincrement=True) 
#     nome =  Column("nome", String)
#     email = Column("email", String)
#     senha = Column("senha", String)

#     def __repr__(self):
#         return f"<Usuario(id={self.id}, nome='{self.nome}', email='{self.email}', senha={self.senha})>"



